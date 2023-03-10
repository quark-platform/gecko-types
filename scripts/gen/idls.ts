import { writeFile } from 'fs/promises'
import { getAllInterfaces, getXPCOMClasses } from 'gecko-index'
import {
  attribute_code,
  const_code,
  enum_code,
  func,
  ifacebody_$0_$0_$0,
  interface_main,
  member_$0_$0,
} from 'gecko-index/lib/parser.js'
import ts from 'typescript'
import { parse as jsdocParse } from 'comment-parser'
import type { Block } from 'comment-parser/primitives'
import {
  cleanUpComment,
  DECLARE_MODIFIER,
  formatDocCommentString,
  getJSDocNamedSpec,
  idlDocToJSDocParam,
  printNode,
  READ_ONLY_MODIFIER,
} from './shared.js'

const interfaceFiles = await getAllInterfaces()
export const idlTypes = new Set<string>()
export const idlConstants = new Map<string, { key: string; value: string }[]>()
export const idlUUID = new Map<string, string>()

let idlDefFile = ''
const idlDefFileBuilder = ts.createSourceFile(
  'idls.d.ts',
  '',
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS
)

function handleAttribute(
  code: attribute_code,
  docComment: string
): ts.TypeElement[] {
  let modifiers = []

  if (code.readonly) {
    modifiers.push(READ_ONLY_MODIFIER)
  }

  // TODO: Array<...> support
  if (typeof code.name != 'string' || typeof code.type != 'string') return []

  return [
    ts.addSyntheticLeadingComment(
      ts.factory.createPropertySignature(
        modifiers,
        code.name,
        undefined,
        ts.factory.createTypeReferenceNode(code.type.replaceAll(' ', '_'))
      ),
      ts.SyntaxKind.MultiLineCommentTrivia,
      formatDocCommentString(docComment),
      true
    ),
  ]
}

function handleFunc(
  code: func,
  docCommentRaw: member_$0_$0[]
): ts.TypeElement[] {
  const { return_type: returnType, name, params: rawParams } = code
  const docComment = generateDocCommentType(docCommentRaw)
  const parsed: Block[] = jsdocParse(`/*${idlDocToJSDocParam(docComment)}*/`)

  // TODO: Array<...> support
  if (typeof returnType != 'string') return []
  if (typeof name != 'string') return []

  let params = []

  if (rawParams?.first_param) {
    params.push(
      ...[
        rawParams.first_param,
        ...(rawParams?.other.map((val) => val.param) || []),
      ].map((val) => {
        let name = 'invalid',
          type = 'invalid'

        if (typeof val.name == 'string') name = val.name
        // TODO: Array<...> support
        if (typeof val.type == 'string') type = val.type.replaceAll(' ', '_')

        if (name == 'debugger' || name == 'function') name = `_${name}`

        const matchingDocSpec = getJSDocNamedSpec(parsed, name)
        if (matchingDocSpec) {
          if (matchingDocSpec.optional) type += '?'
        }

        return ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          name,
          undefined,
          ts.factory.createTypeReferenceNode(type)
        )
      })
    )
  }

  return [
    ts.addSyntheticLeadingComment(
      ts.factory.createMethodSignature(
        undefined,
        name,
        undefined,
        undefined,
        params,
        ts.factory.createTypeReferenceNode(returnType.replaceAll(' ', '_'))
      ),
      ts.SyntaxKind.MultiLineCommentTrivia,
      docComment,
      true
    ),
  ]
}

function handleConst(
  code: const_code,
  interfaceName: string
): ts.TypeElement[] {
  const constants = idlConstants.get(interfaceName) || []

  const { name: key, value } = code
  if (typeof key !== 'string' || typeof value !== 'string') return []
  constants.push({ key, value })

  idlConstants.set(interfaceName, constants)

  // We do not emit anything here. We add it to Ci further down
  return []
}

function interfaceBody(
  contents: ifacebody_$0_$0_$0,
  interfaceName: string
): ts.TypeElement[] {
  if (typeof contents == 'string') return []
  if (
    contents.kind == 'ANY_COMMENT_$0' ||
    contents.kind == 'REGULAR_MULTILINE_COMMENT' ||
    contents.kind == 'SINGLE_LINE_COMMENT'
  )
    return []

  let docComment: string = ''

  for (const comment of contents.docComment) {
    if (comment.kind != 'DOC_COMMENT') continue

    docComment += cleanUpComment(comment.contents)
    docComment += '\n'
  }

  if (typeof contents.code == 'string') return []
  if (contents.code.kind == 'attribute_code')
    return handleAttribute(contents.code, docComment)
  if (contents.code.kind == 'func')
    return handleFunc(contents.code, contents.docComment)

  if (contents.code.kind == 'const_code') {
    return handleConst(contents.code, interfaceName)
  }

  return []
}

function interfaceMain(node: interface_main) {
  const name = `${node.name}Type`
  const rawName = node.name.toString()

  // Fetch the UUID and store it in the global map
  {
    const attrs = [
      node.attrs?.first_attribute,
      ...(node.attrs?.other_attributes || []).map(({ attr }) => attr),
    ].filter(Boolean)
    let uuid = ''

    for (const attr of attrs) {
      if (attr && attr.name == 'uuid') {
        const value = attr.param?.value
        if (typeof value !== 'string') continue
        uuid = value
      }
    }

    idlUUID.set(rawName, uuid)
  }

  let parentInterface: ts.Identifier | undefined
  const members: ts.TypeElement[] = []
  let docComments = []

  if (node.base && typeof node.base.extends == 'string')
    parentInterface = ts.factory.createIdentifier(`${node.base.extends}Type`)
  else if (node.name === 'nsISupports') {
    /* The one class allowed not to extend something */
  }
  // All XPCOM interfaces that aren't import interfaces must extend something
  else return

  for (const { contents } of node.body?.contents?.contents || []) {
    members.push(...interfaceBody(contents, rawName))
  }

  if (node.doc_comment) {
    docComments.push(node.doc_comment)
  }

  idlTypes.add(rawName)
  idlDefFile += printNode(
    ts.addSyntheticLeadingComment(
      ts.factory.createInterfaceDeclaration(
        [DECLARE_MODIFIER],
        name,
        undefined,
        parentInterface
          ? [
              ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
                ts.factory.createExpressionWithTypeArguments(
                  parentInterface,
                  undefined
                ),
              ]),
            ]
          : [],
        members
      ),
      ts.SyntaxKind.MultiLineCommentTrivia,
      generateDocCommentType(docComments),
      true
    ),
    idlDefFileBuilder
  )
  idlDefFile += '\n\n'
}

for (const file in interfaceFiles) {
  const fileContents = interfaceFiles[file]

  for (const node of fileContents.contents) {
    // Things I don't care about
    if (
      typeof node === 'string' ||
      node.kind == 'INCLUDE' ||
      node.kind == 'ANY_COMMENT_$0'
    )
      continue

    // TODO: Index needs to implement better outputs for type defs
    if (node.kind === 'typedef') {
      continue
    }

    if (node.kind == 'interface_main') {
      interfaceMain(node)
      continue
    }

    console.log('Unknown type', node.kind)
  }
}

// Ci namespace
{
  const members: ts.TypeElement[] = []

  for (const iface of idlTypes) {
    // Each CI item should have a type that looks something like this:
    // ```js
    // {
    //    "name": "ciName",
    //    "number": "UUID",
    //    ...constants
    // }
    // ```

    const constants = (idlConstants.get(iface) || []).map(({ key, value }) => {
      let type

      if (value.startsWith('0x') || !isNaN(value as unknown as number)) {
        type = ts.factory.createNumericLiteral(value)
      } else {
        type = ts.factory.createStringLiteral(value)
      }

      return ts.factory.createPropertySignature(
        [READ_ONLY_MODIFIER],
        key,
        undefined,
        ts.factory.createLiteralTypeNode(type)
      )
    })

    const type = ts.factory.createTypeLiteralNode([
      ts.factory.createPropertySignature(
        [READ_ONLY_MODIFIER],
        'name',
        undefined,
        ts.factory.createLiteralTypeNode(
          ts.factory.createStringLiteral(iface, true)
        )
      ),
      ts.factory.createPropertySignature(
        [READ_ONLY_MODIFIER],
        'number',
        undefined,
        ts.factory.createLiteralTypeNode(
          ts.factory.createStringLiteral(idlUUID.get(iface) || '', true)
        )
      ),
      ...constants,
    ])

    members.push(
      ts.factory.createPropertySignature(undefined, iface, undefined, type)
    )
  }

  idlDefFile += printNode(
    ts.factory.createInterfaceDeclaration(
      undefined,
      ts.factory.createIdentifier('CiType'),
      undefined,
      undefined,
      members
    ),
    idlDefFileBuilder
  )
  idlDefFile += '\n'
  idlDefFile += printNode(
    ts.factory.createVariableStatement(
      [DECLARE_MODIFIER],
      [
        ts.factory.createVariableDeclaration(
          'Ci',
          undefined,
          ts.factory.createTypeReferenceNode('CiType')
        ),
      ]
    ),
    idlDefFileBuilder
  )

  idlDefFile += '\n\n'
}

// Services namespace
{
  const members: ts.Statement[] = []
  const { classes } = await getXPCOMClasses()

  for (const c of classes)
    if (c.js_name && c.interfaces)
      members.push(
        ts.factory.createVariableStatement(
          [DECLARE_MODIFIER],
          [
            ts.factory.createVariableDeclaration(
              c.js_name,
              undefined,
              ts.factory.createTypeReferenceNode(
                c.interfaces.map((int) => `${int}Type`).join(' & ')
              )
            ),
          ]
        )
      )

  idlDefFile += printNode(
    ts.factory.createModuleDeclaration(
      [DECLARE_MODIFIER],
      ts.factory.createIdentifier('Services'),
      ts.factory.createModuleBlock(members)
    ),
    idlDefFileBuilder
  )
}

await writeFile('./types/gen/idls.d.ts', idlDefFile)

function generateDocCommentType(comments: member_$0_$0[]): string {
  let docCommentString = ''

  for (const comment of comments) {
    if (comment.kind == 'DOC_COMMENT') {
      docCommentString += `${cleanUpComment(comment.contents)}\n\n`
      continue
    }

    console.log('Invalid comment kind', comment.kind)
  }

  return formatDocCommentString(docCommentString)
}

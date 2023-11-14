import { writeFile } from 'fs/promises'
import { getAllInterfaces, getXPCOMClasses } from 'gecko-index'
import {
  attribute,
  attributes,
  attribute_code,
  const_code,
  func,
  ifacebody_$0_$0_$0,
  interface_main,
  member_$0_$0,
  enum_code,
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
export const idlConstants = new Map<
  string,
  { key: string; value: string | undefined }[]
>()
export const idlUUID = new Map<string, string>()

let idlDefFile = ''
const idlDefFileBuilder = ts.createSourceFile(
  'idls.d.ts',
  '',
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS
)

const arrayifyAttributes = ({
  first_attribute,
  other_attributes,
}: attributes): attribute[] => [
  first_attribute,
  ...other_attributes.map(({ attr }) => attr),
]

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
  const { return_type: returnType, name, params: rawParams, attributes } = code
  const docComment = generateDocCommentType(docCommentRaw)
  const parsed: Block[] = jsdocParse(`/*${idlDocToJSDocParam(docComment)}*/`)

  // Make sure that this is not a noscript attribute
  if (attributes) {
    const attrs = arrayifyAttributes(attributes)
    const isNoScript = attrs.some(
      ({ name }) => typeof name == 'string' && name == 'noscript'
    )
    if (isNoScript) return []
  }

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
          type = 'invalid',
          optional = false

        if (typeof val.name == 'string') name = val.name
        // TODO: Array<...> support
        if (typeof val.type == 'string') type = val.type.replaceAll(' ', '_')

        // If a type starts with nsI, it is probibly an interface, and we should
        // append the 'Type' postfix
        if (type.startsWith('nsI')) type += 'Type'
        if (name == 'debugger' || name == 'function') name = `_${name}`

        // Support type attributes
        if (val.attribute) {
          const attrs = arrayifyAttributes(val.attribute)
          const names = attrs
            .map(({ name }) => name)
            .filter((name) => typeof name == 'string')
            .map((n) => n as string)

          if (names.includes('array')) type += '[]'
          if (names.includes('optional')) optional = true
        }

        const matchingDocSpec = getJSDocNamedSpec(parsed, name)
        if (matchingDocSpec && matchingDocSpec.optional) optional = true

        return ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          name,
          optional
            ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
            : undefined,
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

function addConstant(
  interfaceName: string,
  key: string,
  value?: string
): ts.TypeElement[] {
  const constants = idlConstants.get(interfaceName) || []
  constants.push({ key, value })
  idlConstants.set(interfaceName, constants)

  return [
    ts.factory.createPropertySignature(
      [READ_ONLY_MODIFIER],
      key,
      undefined,
      value ? ts.factory.createTypeReferenceNode('string') : undefined
    ),
  ]
}

function handleConst(
  code: const_code,
  interfaceName: string
): ts.TypeElement[] {
  const { name: key, value } = code
  if (typeof key !== 'string') return []

  if (typeof value !== 'string') {
    return addConstant(interfaceName, key)
  } else {
    return addConstant(interfaceName, key, value)
  }

  return []
}

function handleEnum(code: enum_code, interfaceName: string): ts.TypeElement[] {
  const values = [
    code.values?.first_value,
    ...(code.values?.other_values.map((e) => e.value) || []),
  ].filter(Boolean)
  const enumConstants = []

  for (const value of values) {
    if (typeof value.identifier != 'string') continue
    enumConstants.push(...addConstant(interfaceName, value.identifier))
  }

  return enumConstants
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

  if (contents.code.kind == 'enum_code') {
    return handleEnum(contents.code, interfaceName)
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

// Helper keys
idlDefFile += printNode(
  ts.factory.createTypeAliasDeclaration(
    undefined,
    ts.factory.createIdentifier('CiKeys'),
    undefined,
    ts.factory.createUnionTypeNode(
      [...idlTypes].map((iface) =>
        ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(iface))
      )
    )
  ),
  idlDefFileBuilder
)
idlDefFile += '\n'

// Helper type maps
idlDefFile += printNode(
  ts.factory.createInterfaceDeclaration(
    undefined,
    ts.factory.createIdentifier('CiMap'),
    undefined,
    undefined,
    [...idlTypes].map((iface) =>
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createIdentifier(iface),
        undefined,
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier(`${iface}Type`),
          undefined
        )
      )
    )
  ),
  idlDefFileBuilder
)

idlDefFile += '\n\n'

// Ci namespace
{
  const members: ts.TypeElement[] = []
  const numberBindings: ts.TypeElement[] = []

  for (const iface of idlTypes) {
    const num = idlUUID.get(iface) || ''
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

      if (typeof value === 'undefined') {
      } else if (value.startsWith('0x') || !isNaN(value as unknown as number)) {
        type = ts.factory.createLiteralTypeNode(
          ts.factory.createNumericLiteral(value)
        )
      } else {
        type = ts.factory.createLiteralTypeNode(
          ts.factory.createStringLiteral(value)
        )
      }

      return ts.factory.createPropertySignature(
        [READ_ONLY_MODIFIER],
        key,
        undefined,
        type
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
          ts.factory.createStringLiteral(num, true)
        )
      ),
      ...constants,
    ])

    const numberBinding = ts.factory.createTypeLiteralNode([
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
        'interface',
        undefined,
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier(`${iface}Type`),
          undefined
        )
      ),
    ])

    numberBindings.push(
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(`{${num}}`),
        undefined,
        numberBinding
      )
    )
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
    ts.factory.createInterfaceDeclaration(
      undefined,
      ts.factory.createIdentifier('CiNumberBinding'),
      undefined,
      undefined,
      numberBindings
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

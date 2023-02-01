import { writeFile } from 'fs/promises'
import { getAllInterfaces, getXPCOMClasses } from 'gecko-index'
import { member_$0_$0 } from 'gecko-index/lib/parser.js'
import ts from 'typescript'
import {
  cleanUpComment,
  DECLARE_MODIFIER,
  formatDocCommentString,
  printNode,
  READ_ONLY_MODIFIER,
} from './shared.js'

const interfaceFiles = await getAllInterfaces()
export const idlTypes = new Set<string>()

let idlDefFile = ''
const idlDefFileBuilder = ts.createSourceFile(
  'idls.d.ts',
  '',
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS
)

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
      const name = `${node.name}Type`
      const rawName = node.name.toString()

      let parentInterface: ts.Identifier | undefined
      const members: ts.TypeElement[] = []
      let docComments = []

      if (node.base && typeof node.base.extends == 'string')
        parentInterface = ts.factory.createIdentifier(node.base.extends)
      // All XPCOM interfaces that aren't import interfaces must extend something
      else continue

      for (const { contents } of node.body?.contents?.contents || []) {
        if (typeof contents == 'string') continue
        if (
          contents.kind == 'ANY_COMMENT_$0' ||
          contents.kind == 'REGULAR_MULTILINE_COMMENT' ||
          contents.kind == 'SINGLE_LINE_COMMENT'
        )
          continue

        let docComment = ''

        for (const comment of contents.docComment) {
          if (comment.kind != 'DOC_COMMENT') continue

          docComment += cleanUpComment(comment.contents)
          docComment += '\n'
        }

        if (typeof contents.code == 'string') continue
        if (contents.code.kind == 'attribute_code') {
          let modifiers = []

          if (contents.code.readonly) {
            modifiers.push(READ_ONLY_MODIFIER)
          }

          // TODO: Array<...> support
          if (
            typeof contents.code.name != 'string' ||
            typeof contents.code.type != 'string'
          )
            continue

          members.push(
            ts.addSyntheticLeadingComment(
              ts.factory.createPropertySignature(
                modifiers,
                contents.code.name,
                undefined,
                ts.factory.createTypeReferenceNode(
                  contents.code.type.replaceAll(' ', '_')
                )
              ),
              ts.SyntaxKind.MultiLineCommentTrivia,
              generateDocCommentType(contents.docComment),
              true
            )
          )
          continue
        }
        if (contents.code.kind == 'func') {
          const { docComment } = contents
          const {
            return_type: returnType,
            name,
            params: rawParams,
          } = contents.code

          // TODO: Array<...> support
          if (typeof returnType != 'string') continue
          if (typeof name != 'string') continue

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
                if (typeof val.type == 'string')
                  type = val.type.replaceAll(' ', '_')

                if (name == 'debugger' || name == 'function') name = `_${name}`

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

          members.push(
            ts.addSyntheticLeadingComment(
              ts.factory.createMethodSignature(
                undefined,
                name,
                undefined,
                undefined,
                params,
                ts.factory.createTypeReferenceNode(
                  returnType.replaceAll(' ', '_')
                )
              ),
              ts.SyntaxKind.MultiLineCommentTrivia,
              generateDocCommentType(contents.docComment),
              true
            )
          )

          continue
        }
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
            [
              ts.factory.createHeritageClause(
                ts.SyntaxKind.ExtendsKeyword,
                !parentInterface
                  ? []
                  : [
                      ts.factory.createExpressionWithTypeArguments(
                        parentInterface,
                        undefined
                      ),
                    ]
              ),
            ],
            members
          ),
          ts.SyntaxKind.MultiLineCommentTrivia,
          generateDocCommentType(docComments),
          true
        ),
        idlDefFileBuilder
      )
      idlDefFile += '\n\n'

      continue
    }

    console.log('Unknown type', node.kind)
  }
}

// Ci namespace
{
  const members: ts.TypeElement[] = []

  for (const iface of idlTypes) {
    members.push(
      ts.factory.createPropertySignature(undefined, iface, undefined, undefined)
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

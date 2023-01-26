import { writeFile } from 'fs/promises'
import { getAllInterfaces } from 'gecko-index'
import { member_$0_$0 } from 'gecko-index/lib/parser.js'
import ts from 'typescript'

const interfaceFiles = await getAllInterfaces()

const READ_ONLY_MODIFIER = ts.factory.createModifier(
  ts.SyntaxKind.ReadonlyKeyword
)

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
      let parentInterface: string
      const members: ts.TypeElement[] = []
      let docComments = []

      if (node.base) {
        // This is for Array<...>
        if (typeof node.base.extends != 'string') continue

        parentInterface = node.base.extends
      }
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

      idlDefFile += printNode(
        ts.addSyntheticLeadingComment(
          ts.factory.createInterfaceDeclaration(
            [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            name,
            undefined,
            [
              ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
                ts.factory.createExpressionWithTypeArguments(
                  ts.factory.createIdentifier(parentInterface),
                  undefined
                ),
              ]),
            ],
            members
          ),
          ts.SyntaxKind.MultiLineCommentTrivia,
          generateDocCommentType(docComments),
          true
        )
      )
      idlDefFile += '\n\n'

      continue
    }

    console.log('Unknown type', node.kind)
  }
}

await writeFile('./types/gen/idls.d.ts', idlDefFile)

function printNode(node: ts.Node): string {
  const printer = ts.createPrinter()
  return printer.printNode(ts.EmitHint.Unspecified, node, idlDefFileBuilder)
}

function generateDocCommentType(comments: member_$0_$0[]): string {
  let docCommentString = ''

  for (const comment of comments) {
    if (comment.kind == 'DOC_COMMENT') {
      docCommentString += `${cleanUpComment(comment.contents)}\n\n`
      continue
    }

    console.log('Invalid comment kind', comment.kind)
  }

  return `*\n * ${docCommentString.trim().split('\n').join('\n * ')}\n `
}

export function cleanUpComment(comment: string): string {
  comment = comment
    .split('\n')
    .filter((line) => !line.includes('//#')) // Ignore preprocessor lines
    .join('\n')
    .trim()

  if (comment.startsWith('/*')) {
    comment = comment.replace('/**', '').replace('/*', '').replace('*/', '')
    comment = comment.replace(/\n\s*\*/gm, '\n')
  }

  if (comment.startsWith('//')) {
    comment = comment.replace(/\n\s*\/\//gm, '\n').replace('//', '')
  }

  return comment
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim()
}

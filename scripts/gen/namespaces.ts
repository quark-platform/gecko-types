import { getNamespaces } from 'gecko-index'
import { writeFile } from 'node:fs/promises'
import ts from 'typescript'

import {
  cleanUpComment,
  convertIdlType,
  DECLARE_MODIFIER,
  formatDocCommentString,
  invalidNames,
  printNode,
} from './shared.js'

let namespaceDefFile = ''
const namespaceDefFileBuilder = ts.createSourceFile(
  'namespaces.d.ts',
  '',
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS,
)

const namespaces = await getNamespaces()
for (const namespaceKey in namespaces) {
  const namespace = namespaces[namespaceKey]

  const attributes: ts.Statement[] = []
  for (const attribute of namespace.attributes) {
    const modifiers: ts.Modifier[] = []
    let { name, trivia: docComment, readonly, valueType } = attribute

    if (invalidNames.includes(name)) continue

    const { nullable } = valueType
    const idlType = convertIdlType(valueType)

    attributes.push(
      ts.addSyntheticLeadingComment(
        ts.factory.createVariableStatement(modifiers, [
          ts.factory.createVariableDeclaration(
            name,
            undefined,
            ts.factory.createTypeReferenceNode(
              `${readonly ? 'readonly' : ''} ${idlType} ${nullable ? '?' : ''}`,
            ),
          ),
        ]),
        ts.SyntaxKind.MultiLineCommentTrivia,
        formatDocCommentString(cleanUpComment(docComment)),
        true,
      ),
    )
  }

  const methods: ts.Statement[] = []
  for (const method of namespace.methods) {
    const modifiers: ts.Modifier[] = []
    let { name, trivia: docComment, return: returnType } = method

    if (invalidNames.includes(name)) continue

    const { nullable } = returnType
    const idlType = convertIdlType(returnType)

    attributes.push(
      ts.addSyntheticLeadingComment(
        ts.factory.createFunctionDeclaration(
          modifiers,
          undefined,
          name,
          undefined,
          [],
          ts.factory.createTypeReferenceNode(
            `${idlType} ${nullable ? '?' : ''}`,
          ),
          undefined,
        ),
        ts.SyntaxKind.MultiLineCommentTrivia,
        formatDocCommentString(cleanUpComment(docComment)),
        true,
      ),
    )
  }

  namespaceDefFile += printNode(
    ts.factory.createModuleDeclaration(
      [DECLARE_MODIFIER],
      ts.factory.createIdentifier(namespaceKey),
      ts.factory.createModuleBlock([...attributes, ...methods]),
    ),
    namespaceDefFileBuilder,
  )
  namespaceDefFile += '\n\n'
}

await writeFile('./types/gen/namespaces.d.ts', namespaceDefFile)

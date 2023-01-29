import { getAllInterfaces, getNamespaces } from 'gecko-index'
import { writeFile } from 'node:fs/promises'
import ts from 'typescript'
import { idlTypes } from './idls.js'

import { cleanUpComment, DECLARE_MODIFIER, printNode } from './shared.js'

let namespaceDefFile = ''
const namespaceDefFileBuilder = ts.createSourceFile(
  'namespaces.d.ts',
  '',
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
)

const namespaces = await getNamespaces()
for (const namespaceKey in namespaces) {
  const namespace = namespaces[namespaceKey]

  const attributes: ts.Statement[] = []
  for (const attribute of namespace.attributes) {
    const modifiers: ts.Modifier[] = []
    let {
      name,
      trivia: docComment,
      readonly,
      valueType: { idlType, nullable },
    } = attribute

    if (idlTypes.has(idlType)) idlType = `${idlType}Type`

    attributes.push(
      ts.addSyntheticLeadingComment(
        ts.factory.createVariableStatement(modifiers, [
          ts.factory.createVariableDeclaration(
            name,
            undefined,
            ts.factory.createTypeReferenceNode(
              `${readonly ? 'readonly' : ''} ${idlType} ${nullable ? '?' : ''}`
            )
          ),
        ]),
        ts.SyntaxKind.MultiLineCommentTrivia,
        cleanUpComment(docComment),
        true
      )
    )
  }

  namespaceDefFile += printNode(
    ts.factory.createModuleDeclaration(
      [DECLARE_MODIFIER],
      ts.factory.createIdentifier(namespaceKey),
      ts.factory.createModuleBlock([...attributes])
    ),
    namespaceDefFileBuilder
  )
  namespaceDefFile += '\n\n'
}

await writeFile('./types/gen/namespaces.d.ts', namespaceDefFile)

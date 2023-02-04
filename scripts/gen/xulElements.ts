import ts from 'typescript'
import { getXULElements } from 'gecko-index'
import { DECLARE_MODIFIER, printNode } from './shared.js'
import { writeFile } from 'fs/promises'

let xulElementsDefFile = ''
const xulElementsDefFileBuilder = ts.createSourceFile(
  'namespaces.d.ts',
  '',
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
)

const xulElementStrings: ts.StringLiteral[] = []
const xulElementProps: ts.PropertySignature[] = []

for (const { tagName: xulElementName, className } of await getXULElements()) {
  xulElementStrings.push(ts.factory.createStringLiteral(xulElementName, true))
  xulElementProps.push(
    ts.factory.createPropertySignature(
      [],
      ts.factory.createComputedPropertyName(
        ts.factory.createStringLiteral(xulElementName, true)
      ),
      undefined,
      ts.factory.createExpressionWithTypeArguments(
        ts.factory.createIdentifier(className),
        undefined
      )
    )
  )

  xulElementsDefFile += printNode(
    ts.factory.createInterfaceDeclaration(
      [DECLARE_MODIFIER],
      className,
      undefined,
      [
        ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
          ts.factory.createExpressionWithTypeArguments(
            ts.factory.createIdentifier('MozXULElement'),
            undefined
          ),
        ]),
      ],
      // TODO: Extract properties and methods from classes
      []
    ),
    xulElementsDefFileBuilder
  )
  xulElementsDefFile += '\n'
}

xulElementsDefFile += printNode(
  ts.factory.createTypeAliasDeclaration(
    [],
    'XULElementTypes',
    undefined,
    ts.factory.createTypeLiteralNode(xulElementProps)
  ),
  xulElementsDefFileBuilder
)

await writeFile('./types/gen/xulElements.d.ts', xulElementsDefFile)

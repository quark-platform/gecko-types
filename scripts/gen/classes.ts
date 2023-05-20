// This file generates types for the gecko/firefox `Cc` object

import { getXPCOMClasses } from 'gecko-index'
import ts from 'typescript'
import { writeFile } from 'fs/promises'

import { printNode } from './shared.js'

let ccDefFile = ''
const ccDefFileBuilder = ts.createSourceFile(
  'cc.d.ts',
  '',
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
)

const { classes } = await getXPCOMClasses()
const types: ts.TypeElement[] = classes.flatMap(
  (c) =>
    c.contract_ids?.map((contract_id, index) => {
      const iface = c.interfaces?.[index]
      const ifaceType = iface
        ? ts.factory.createTypeReferenceNode(
            ts.factory.createIdentifier(iface + 'Type'),
            undefined
          )
        : ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)

      return ts.factory.createPropertySignature(
        undefined,
        ts.factory.createComputedPropertyName(
          ts.factory.createStringLiteral(contract_id)
        ),
        undefined,
        ts.factory.createTypeLiteralNode(
          [
            c.singleton &&
              ts.factory.createMethodSignature(
                undefined,
                ts.factory.createIdentifier('getService'),
                undefined,
                undefined,
                [],
                ifaceType
              ),
            !c.singleton &&
              ts.factory.createMethodSignature(
                undefined,
                ts.factory.createIdentifier('createInstance'),
                undefined,
                undefined,
                [],
                ifaceType
              ),
            ts.factory.createPropertySignature(
              undefined,
              ts.factory.createIdentifier('name'),
              undefined,
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(contract_id)
              )
            ),
            ts.factory.createPropertySignature(
              undefined,
              ts.factory.createIdentifier('number'),
              undefined,
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(c.cid)
              )
            ),
          ].filter(Boolean)
        )
      )
    }) || []
)

ccDefFile += printNode(
  ts.factory.createVariableStatement(
    [ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
    ts.factory.createVariableDeclarationList([
      ts.factory.createVariableDeclaration(
        ts.factory.createIdentifier('Cc'),
        undefined,
        ts.factory.createTypeLiteralNode(types)
      ),
    ])
  ),
  ccDefFileBuilder
)

await writeFile('./types/gen/classes.d.ts', ccDefFile)

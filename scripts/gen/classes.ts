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
  ts.ScriptKind.TS,
)

const guessInterfaceName = (
  typeName?: string | undefined,
  legacy_constructor?: string | undefined,
): string | void => {
  if (typeName) {
    if (typeName.includes('::')) return guessInterfaceName(undefined, typeName)

    return typeName.replace('moz', 'mozI').replace('ns', 'nsI')
  }
  if (legacy_constructor) {
    if (legacy_constructor.includes('::')) {
      const split = legacy_constructor.split('::')
      return guessInterfaceName(split[split.length - 2])
    }

    return guessInterfaceName(legacy_constructor)
  }
}

const { classes } = await getXPCOMClasses()
const types: ts.TypeElement[] = classes.flatMap(
  (c) =>
    c.contract_ids?.map((contract_id, index) => {
      const iface = c.interfaces?.[index]
      const ifaceType = iface
        ? ts.factory.createTypeReferenceNode(
            ts.factory.createIdentifier(iface + 'Type'),
            undefined,
          )
        : ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)

      const ifaceNameGuess = guessInterfaceName(c.type, c.legacy_constructor)

      return ts.factory.createPropertySignature(
        undefined,
        ts.factory.createComputedPropertyName(
          ts.factory.createStringLiteral(contract_id),
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
                ifaceType,
              ),
            !c.singleton &&
              ts.factory.createMethodSignature(
                undefined,
                ts.factory.createIdentifier('createInstance'),
                undefined,
                [
                  ts.factory.createTypeParameterDeclaration(
                    undefined,
                    ts.factory.createIdentifier('I'),
                    ts.factory.createTypeReferenceNode('CiKeys'),
                  ),
                ],
                [
                  ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    ts.factory.createIdentifier('req'),
                    undefined,
                    ts.factory.createIndexedAccessTypeNode(
                      ts.factory.createTypeReferenceNode(
                        ts.factory.createIdentifier('CiType'),
                        undefined,
                      ),
                      ts.factory.createTypeReferenceNode(
                        ts.factory.createIdentifier('I'),
                        undefined,
                      ),
                    ),
                    undefined,
                  ),
                ],
                ts.factory.createIndexedAccessTypeNode(
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier('CiMap'),
                    undefined,
                  ),
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier('I'),
                    undefined,
                  ),
                ),
              ),
            ts.factory.createPropertySignature(
              undefined,
              ts.factory.createIdentifier('name'),
              undefined,
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(contract_id),
              ),
            ),
            ts.factory.createPropertySignature(
              undefined,
              ts.factory.createIdentifier('number'),
              undefined,
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(c.cid),
              ),
            ),
            c.type &&
              ts.factory.createPropertySignature(
                [ts.factory.createToken(ts.SyntaxKind.PrivateKeyword)],
                ts.factory.createIdentifier('typeName'),
                undefined,
                ts.factory.createLiteralTypeNode(
                  ts.factory.createStringLiteral(c.type),
                ),
              ),
            typeof ifaceNameGuess != 'undefined' &&
              ts.factory.createPropertySignature(
                [ts.factory.createToken(ts.SyntaxKind.PrivateKeyword)],
                ts.factory.createIdentifier('interfaceName'),
                undefined,
                ts.factory.createLiteralTypeNode(
                  ts.factory.createStringLiteral(ifaceNameGuess),
                ),
              ),
          ].filter(Boolean),
        ),
      )
    }) || [],
)

ccDefFile += printNode(
  ts.factory.createVariableStatement(
    [ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
    ts.factory.createVariableDeclarationList([
      ts.factory.createVariableDeclaration(
        ts.factory.createIdentifier('Cc'),
        undefined,
        ts.factory.createTypeLiteralNode(types),
      ),
    ]),
  ),
  ccDefFileBuilder,
)

await writeFile('./types/gen/classes.d.ts', ccDefFile)

import {
  ClassExport,
  FunctionDeclarationExport,
  NumberEstimation,
  ObjectEstimation,
  ObjectPropertyMethod,
  ParsedObjectProperty,
  TypeEstimation,
  VariableDeclarationExport,
  getESM,
  getMozBuildFiles,
  hasESM,
} from 'gecko-index'
import ts from 'typescript'
import { printNode, printNodes } from './shared.js'
import { writeFileSync } from 'fs'

const mods: string[] = []

for (const { isGRE, modules } of await getMozBuildFiles()) {
  const resourcePrefix = isGRE
    ? 'resource://gre/modules'
    : 'resource://app/modules'

  for (const path in modules) {
    for (const moduleName of modules[path]) {
      if (!hasESM(moduleName)) continue

      mods.push(`${moduleName}.d.ts`)
      const moduleDefBuilder = ts.createSourceFile(
        `${moduleName}.d.ts`,
        '',
        ts.ScriptTarget.Latest,
        /*setParentNodes*/ false,
        ts.ScriptKind.TS
      )
      const moduleDef = printNode(
        ts.factory.createModuleDeclaration(
          [ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
          ts.factory.createStringLiteral(resourcePrefix + path + moduleName),
          ts.factory.createModuleBlock(
            (await getESM(moduleName)).map((exp) => {
              switch (exp.type) {
                case 'class':
                  return handleClass(exp)
                case 'function-declaration':
                  return handleFunction(exp)
                case 'variable-declaration':
                  return handleVariable(exp)
              }
            })
          )
        ),
        moduleDefBuilder
      )

      writeFileSync(`./types/gen/esm/${moduleName}.d.ts`, moduleDef)
    }
  }
}

{
  const moduleDefBuilder = ts.createSourceFile(
    `index.d.ts`,
    '',
    ts.ScriptTarget.Latest,
    /*setParentNodes*/ false,
    ts.ScriptKind.TS
  )

  writeFileSync(
    `./types/gen/esm/index.d.ts`,
    printNodes(
      ts.factory.createNodeArray(
        mods.map((mod) =>
          ts.factory.createImportDeclaration(
            undefined,
            undefined,
            ts.factory.createStringLiteral(mod),
            undefined
          )
        )
      ),
      moduleDefBuilder
    )
  )
}

function handleClass(c: ClassExport): ts.Statement {
  function createParam(param: string) {
    return ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      ts.factory.createIdentifier(param),
      undefined,
      undefined,
      undefined
    )
  }

  return ts.factory.createClassDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(c.id),
    undefined,
    undefined,
    c.methods.map((m) => {
      switch (m.kind) {
        case 'constructor':
          return ts.factory.createConstructorDeclaration(
            undefined,
            m.params.map((param) => createParam(param.id)),
            undefined
          )
        case 'method':
          return ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier(m.id),
            undefined,
            undefined,
            [],
            undefined,
            undefined
          )
        case 'get':
          return ts.factory.createGetAccessorDeclaration(
            undefined,
            ts.factory.createIdentifier(m.id),
            [],
            undefined,
            undefined
          )
        case 'set':
          return ts.factory.createSetAccessorDeclaration(
            undefined,
            ts.factory.createIdentifier(m.id),
            m.params.map((param) => createParam(param.id)),
            undefined
          )
        default:
          throw new Error(`Unknown method kind: ${m.kind}`)
      }
    })
  )
}

function handleFunction(c: FunctionDeclarationExport) {
  return ts.factory.createFunctionDeclaration(
    undefined,
    undefined,
    ts.factory.createIdentifier(c.id),
    undefined,
    c.params.map((param) =>
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        ts.factory.createIdentifier(param),
        undefined,
        undefined,
        undefined
      )
    ),
    undefined,
    undefined
  )
}

function handleVariable(c: VariableDeclarationExport) {
  return ts.factory.createVariableStatement(
    undefined,
    ts.factory.createVariableDeclarationList([
      ts.factory.createVariableDeclaration(
        ts.factory.createIdentifier(c.id),
        undefined,
        c.typeEstimation ? root(c.typeEstimation) : undefined
      ),
    ])
  )
}

// =============================================================================
// Handle type estimations

function root(type: TypeEstimation): ts.TypeNode | undefined {
  switch (type.type) {
    case 'object-estimation':
      return objectEstimation(type)
    case 'number-estimation':
      return numberEstimation(type)
  }
}

function numberEstimation(type: NumberEstimation): ts.TypeNode {
  return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
}

function objectEstimation(type: ObjectEstimation): ts.TypeNode {
  return ts.factory.createTypeLiteralNode(
    type.keys
      ? type.keys.map((key) => objectPropertyEstimation(key))
      : undefined
  )
}

function objectPropertyEstimation(type: ParsedObjectProperty): ts.TypeElement {
  switch (type.type) {
    case 'object-property':
      return ts.factory.createPropertySignature(
        undefined,
        ts.factory.createIdentifier(type.id),
        undefined,
        type.typeEstimation ? root(type.typeEstimation) : undefined
      )
    case 'object-method':
      return objectPropertyMethod(type)
  }
}

function objectPropertyMethod(type: ObjectPropertyMethod): ts.TypeElement {
  switch (type.kind) {
    case 'method':
      return ts.factory.createMethodSignature(
        undefined,
        ts.factory.createIdentifier(type.id),
        undefined,
        undefined,
        type.params.map((param) =>
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier(param),
            undefined,
            undefined,
            undefined
          )
        ),
        undefined
      )
    case 'get':
      return ts.factory.createGetAccessorDeclaration(
        undefined,
        ts.factory.createIdentifier(type.id),
        [],
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
        undefined
      )
    case 'set':
      return ts.factory.createSetAccessorDeclaration(
        undefined,
        ts.factory.createIdentifier(type.id),
        type.params.map((param) =>
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier(param),
            undefined,
            undefined,
            undefined
          )
        ),
        undefined
      )
    default:
      throw new Error(`Unknown method kind: ${type.kind}`)
  }
}

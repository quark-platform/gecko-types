import { IdlType } from 'gecko-index'
import ts from 'typescript'
import type { Block } from 'comment-parser/primitives'
import { idlTypes } from './idls.js'

export const READ_ONLY_MODIFIER = ts.factory.createModifier(
  ts.SyntaxKind.ReadonlyKeyword
)

export const QUESTION_TOKEN = ts.factory.createToken(
  ts.SyntaxKind.QuestionToken
)

export const DECLARE_MODIFIER = ts.factory.createModifier(
  ts.SyntaxKind.DeclareKeyword
)

export const invalidNames = ['import']

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

  // Comment formatting
  comment = comment
    .replace(/<I>/gi, '_')
    .replace(/<\/I>/gi, '_')
    .replace(/(<CODE>)|(<pre>)/gi, '`')
    .replace(/(<\/CODE>)|(<\/pre>)/gi, '`')
    .replace(/(<em>)|(<b>)|(<strong>)/gi, '**')
    .replace(/(<\/em>)|(<\/b>)|(<\/strong>)/gi, '**')
    .replace(/<p>/gi, '\n')
    .replace(/(<ul>)|(<ol>)/gi, '')
    .replace(/(<\/ul>)|(<\/ol>)/gi, '')
    .replace(/<li>/gi, '- ')
    .replace(/<\/li>/gi, '')

  return comment
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim()
}

export function printNode(node: ts.Node, builder: ts.SourceFile): string {
  const printer = ts.createPrinter()
  return printer.printNode(ts.EmitHint.Unspecified, node, builder)
}

export function printNodes(
  nodes: ts.NodeArray<ts.Node>,
  builder: ts.SourceFile
): string {
  const printer = ts.createPrinter()
  return printer.printList(ts.ListFormat.MultiLine, nodes, builder)
}

export function convertIdlType(type: IdlType): string {
  if (typeof type == 'string') {
    if (idlTypes.has(type)) type += 'Type'
    return type.replaceAll(' ', '_')
  }

  if (!Array.isArray(type)) {
    if (typeof type.idlType == 'string') return convertIdlType(type.idlType)

    // Object or array
    const { generic } = type
    return `${generic}<${convertIdlType(type.idlType)}>`
  }

  // Array
  return type.map((type) => convertIdlType(type)).join(', ')
}

export const formatDocCommentString = (comment: string) =>
  `*\n * ${comment.trim().split('\n').join('\n * ')}\n `

const idlDocParamRegex = /@param (?<type>\w*) (?<name>[\w\[\]]*)/gm
export const idlDocToJSDocParam = (idlDoc: string) =>
  idlDoc.replace(idlDocParamRegex, '@param {$<type>} $<name>')

export const getJSDocNamedSpec = (blocks: Block[], name: string) => {
  for (const block of blocks) {
    const spec = block.tags.find((spec) => spec.name == name)
    if (spec) return spec
  }
}

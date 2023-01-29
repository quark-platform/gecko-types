import ts from 'typescript'

export const READ_ONLY_MODIFIER = ts.factory.createModifier(
  ts.SyntaxKind.ReadonlyKeyword
)

export const QUESTION_TOKEN = ts.factory.createToken(
  ts.SyntaxKind.QuestionToken
)

export const DECLARE_MODIFIER = ts.factory.createModifier(
  ts.SyntaxKind.DeclareKeyword
)

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

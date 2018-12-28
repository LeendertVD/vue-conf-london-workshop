// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.CallExpression)
    .forEach(path => {
      if (path.value.callee.name === 'test') {
        path.value.arguments.pop()
      }
    })
    .toSource()
}

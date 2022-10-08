export const isPaired = input => {
  let brackets = input.replaceAll(/[^(){}[\]]/g, '')

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let ar = []

  for (let bracket of brackets) {
    if (bracket == '(' || bracket == '{' || bracket == '[') {
      ar.push(bracket)
    } else {
      if (bracket == pairs[ar.at(-1)]) {
        ar.pop()
      } else {
        return false
      }
    }
  }

  if (ar.length != 0) {
    return false
  }

  return true
}

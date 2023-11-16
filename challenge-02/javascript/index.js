export function compiler(input) {
  let curr = ''
  let count = 0
  input.split('').forEach((char) => {
    if (char === '#') count++
    if (char === '@') count--
    if (char === '*') count *= count
    if (char === '&') curr += count
  })
  return curr
}

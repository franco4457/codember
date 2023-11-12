import { createRequire } from 'node:module'
const { data } = createRequire(import.meta.url)('../data.json')

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

console.log(compiler(data))

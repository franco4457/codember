import { bench } from 'vitest'
import { compiler, compiler2, compiler3 } from '.'

const input = '&##&*&@&'
bench('Solution 01', () => {
  compiler(input)
})
bench('Solution 02', () => {
  compiler2(input)
})
bench('Solution 03', () => {
  compiler3(input)
})

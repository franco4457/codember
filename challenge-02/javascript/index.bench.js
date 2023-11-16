import { bench } from 'vitest'
import { compiler, compiler2, compiler3, compiler4 } from '.'

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
bench('Solution 04', () => {
  compiler4(input)
})

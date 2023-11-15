import { bench } from 'vitest'
import { decript, decript2, decript3, decript4 } from '.'

const msg = 'llaveS casa CASA casa llaves'
bench('Solution 01', () => {
  decript(msg)
})
bench.only('Solution 02', () => {
  decript2(msg)
})
bench('Solution 03', () => {
  decript3(msg)
})
bench('Solution 04', () => {
  decript4(msg)
})

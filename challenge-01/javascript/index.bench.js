import { bench } from 'vitest'
import { decript, decript2, decript3 } from '.'

bench('Solution 01', () => {
  const msg = 'llaveS casa CASA casa llaves'
  decript(msg)
})
bench('Solution 02', () => {
  const msg = 'llaveS casa CASA casa llaves'
  decript2(msg)
})
bench('Solution 03', () => {
  const msg = 'llaveS casa CASA casa llaves'
  decript3(msg)
})

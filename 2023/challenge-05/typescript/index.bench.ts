import { bench } from 'vitest'
import { validateUsers, validateUsers2, validateUsers3 } from '.'

const sheet = [
  '1a421fa,alex,alex9@gmail.com,18,Barcelona',
  '9412p*m,maria,mb@hotmail.com,22,CDMX',
  '494ee0,madeval,mdv@twitch.tv,,',
  '494ee0,madeval,twitch.tv,22,Montevideo'
]
describe('Challenge 05 - Typescript', () => {
  bench('Solution 01', () => {
    validateUsers(sheet)
  })
  bench('Solution 02', () => {
    validateUsers2(sheet)
  })
  bench('Solution 03', () => {
    validateUsers3(sheet)
  })
})

import { data, solution } from '../data.json'
import { decript } from '.'

describe('Challenge 01 - TypeScript', () => {
  it('Example - 01', () => {
    const msg = 'llaveS casa CASA casa llaves'
    const result = 'llaves2casa3'
    expect(decript(msg)).toBe(result)
  })
  it('Example - 02', () => {
    const msg = 'taza ta za taza'
    const result = 'taza2ta1za1'
    expect(decript(msg)).toBe(result)
  })
  it('Example - 03', () => {
    const msg = 'casas casa casasas'
    const result = 'casas1casa1casasas1'
    expect(decript(msg)).toBe(result)
  })
  it('Example - 04', () => {
    const msg = 'gato perro perro coche Gato peRRo sol'
    const result = 'gato2perro3coche1sol1'
    expect(decript(msg)).toBe(result)
  })
  it('CHALLENGE', () => {
    expect(decript(data)).toBe(solution)
  })
})

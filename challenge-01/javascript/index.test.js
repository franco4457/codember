import { createRequire } from 'node:module'
const { data, solution } = createRequire(import.meta.url)('../data.json')
import { expect, it, describe } from 'vitest'
import { decript, decript2, decript3 } from './index.js'

describe('Challenge 01 - JavaScript', () => {
  it('Example - 01', () => {
    const msg = 'llaveS casa CASA casa llaves'
    const result = 'llaves2casa3'
    expect(decript(msg)).toBe(result)
    expect(decript2(msg)).toBe(result)
    expect(decript3(msg)).toBe(result)
  })
  it('Example - 02', () => {
    const msg = 'taza ta za taza'
    const result = 'taza2ta1za1'
    expect(decript(msg)).toBe(result)
    expect(decript2(msg)).toBe(result)
    expect(decript3(msg)).toBe(result)
  })
  it('Example - 03', () => {
    const msg = 'casas casa casasas'
    const result = 'casas1casa1casasas1'
    expect(decript(msg)).toBe(result)
    expect(decript2(msg)).toBe(result)
    expect(decript3(msg)).toBe(result)
  })
  it('Example - 04', () => {
    const msg = 'gato perro perro coche Gato peRRo sol'
    const result = 'gato2perro3coche1sol1'
    expect(decript(msg)).toBe(result)
    expect(decript2(msg)).toBe(result)
    expect(decript3(msg)).toBe(result)
  })
  it('CHALLENGE', () => {
    expect(decript(data)).toBe(solution)
    expect(decript2(data)).toBe(solution)
    expect(decript3(data)).toBe(solution)
  })
})

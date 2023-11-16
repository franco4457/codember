import { createRequire } from 'node:module'
const { data, solution } = createRequire(import.meta.url)('../data.json')
import { expect, it, describe } from 'vitest'
import { compiler } from './index.js'

describe('Challenge 02 - JavaScript', () => {
  it('Example - 01', () => {
    const msg = '##*&'
    const result = '4'
    expect(compiler(msg)).toBe(result)
  })
  it('Example - 02', () => {
    const msg = '&##&*&@&'
    const result = '0243'
    expect(compiler(msg)).toBe(result)
  })
  it('CHALLENGE', () => {
    expect(compiler(data)).toBe(solution)
  })
})

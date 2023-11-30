import { createRequire } from 'node:module'
const { data, solution } = createRequire(import.meta.url)('../data.json')
import { expect, it, describe } from 'vitest'
import { validateChecksum } from './index.js'

describe('Challenge 04 - JavaScript', () => {
  it('Example - 01', () => {
    const files = ['xyzz33-xy', 'abcca1-ab1', 'abbc11-ca']
    expect(validateChecksum(files)).toEqual(['xyzz33-xy'])
  })
  it('Example - 02', () => {
    const files = ['lKyxSLIEj-lKyxSLIEj', 'xyzz33-xz', 'SXxyqnzER-SXxyqnzER', '9wP9i1-9wPi1']
    expect(validateChecksum(files)).toEqual(['lKyxSLIEj-lKyxSLIEj', 'SXxyqnzER-SXxyqnzER'])
  })
  it('CHALLENGE', () => {
    const dataToArray = data.split('\n')
    expect(validateChecksum(dataToArray)[32].split('-')[1]).toBe(solution)
  })
})

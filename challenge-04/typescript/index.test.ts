import { data, solution } from '../data.json'
import { validateChecksum } from './index.js'

describe('Challenge 04 - TypeScript', () => {
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

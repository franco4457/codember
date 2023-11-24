import { data, solution } from '../data.json'
import { decoder, decoder2, decoder3, decoder4 } from '.'

describe('Challenge 03 - TypeScript', () => {
  it('Example - 01', () => {
    const list = `2-4 f: fgfff\n4-6 z: zzzsg\n1-6 h: hhhhhh`
    expect(decoder(list, 0)).toBe('zzzsg')
    expect(decoder2(list, 0)).toBe('zzzsg')
    expect(decoder3(list, 0)).toBe('zzzsg')
    expect(decoder4(list, 0)).toBe('zzzsg')
  })
  it('Example - 02', () => {
    const list = `1-6 y: yyyqyyfyy\n1-2 s: gfzsg\n2-5 k: pkajsdmfxcgrn\n1-6 f: ffffff`
    expect(decoder(list, 1)).toBe('pkajsdmfxcgrn')
    expect(decoder2(list, 1)).toBe('pkajsdmfxcgrn')
    expect(decoder3(list, 1)).toBe('pkajsdmfxcgrn')
    expect(decoder4(list, 1)).toBe('pkajsdmfxcgrn')
  })
  it('CHALLENGE', () => {
    expect(decoder(data, 41)).toBe(solution)
    expect(decoder2(data, 41)).toBe(solution)
    expect(decoder3(data, 41)).toBe(solution)
    expect(decoder4(data, 41)).toBe(solution)
  })
})

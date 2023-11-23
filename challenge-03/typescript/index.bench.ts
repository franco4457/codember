import { bench } from 'vitest'
import { decoder, decoder2, decoder3 } from '.'

const list = `2-4 f: fgfff\n4-6 z: zzzsg\n1-6 h: hhhhhh`
bench('Solution 01', () => {
  decoder(list, 0)
})
bench('Solution 02', () => {
  decoder2(list, 0)
})
bench('Solution 03', () => {
  decoder3(list, 0)
})

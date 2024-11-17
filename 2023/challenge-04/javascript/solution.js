import { createRequire } from 'node:module'
import { validateChecksum } from './index.js'
const { data } = createRequire(import.meta.url)('../data.json')
const dataToArray = data.split('\n')

console.log(validateChecksum(dataToArray)[32])

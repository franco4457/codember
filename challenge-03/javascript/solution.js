import { createRequire } from 'node:module'
import { decoder } from './index.js'
const { data } = createRequire(import.meta.url)('../data.json')

console.log(decoder(data))

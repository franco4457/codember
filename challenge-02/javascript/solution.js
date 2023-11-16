import { createRequire } from 'node:module'
import { compiler } from './index.js'
const { data } = createRequire(import.meta.url)('../data.json')

console.log(compiler(data))

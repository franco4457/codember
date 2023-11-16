import { createRequire } from 'node:module'
import { compiler5 } from './index.js'
const { data } = createRequire(import.meta.url)('../data.json')

console.log(compiler5(data))

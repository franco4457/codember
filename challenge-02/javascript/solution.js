import { createRequire } from 'node:module'
import { compiler2 } from './index.js'
const { data } = createRequire(import.meta.url)('../data.json')

console.log(compiler2(data))

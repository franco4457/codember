import { createRequire } from 'node:module'
import { decript3 } from '.'
const { data } = createRequire(import.meta.url)('../data.json')

console.log(decript3(data))

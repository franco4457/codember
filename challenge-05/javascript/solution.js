import { createRequire } from 'node:module'
import { validateUsers } from './index.js'
const { data } = createRequire(import.meta.url)('../data.json')
const dataToArray = data.split('\n')

console.log(validateUsers(dataToArray))

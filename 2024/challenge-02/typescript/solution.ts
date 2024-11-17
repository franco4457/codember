import fs from 'node:fs/promises'
import { detectPattern } from './index'
;(async () => {
  const data = (await fs.readFile('../data.txt')).toString()
  console.log(detectPattern(data))
})()

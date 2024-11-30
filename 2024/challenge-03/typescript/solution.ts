import fs from 'node:fs/promises'
import { countSteps } from './index'
;(async () => {
  const data = (await fs.readFile('../data.txt')).toString()
  console.log({ response: countSteps(data) })
})()

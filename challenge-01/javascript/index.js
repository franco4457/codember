import { createRequire } from 'node:module'
const { data } = createRequire(import.meta.url)('../data.json')

export function decript(message) {
  const arrMsg = message.split(' ')
  const msgDic = {}
  arrMsg.forEach((word) => {
    word = word.toLowerCase()
    msgDic.hasOwnProperty(word) ? msgDic[word]++ : (msgDic[word] = 1)
  })
  const entries = Object.entries(msgDic)
  return entries.flat(2).join('')
}

console.log(decript(data))

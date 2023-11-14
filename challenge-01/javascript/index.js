import { createRequire } from 'node:module'
const { data } = createRequire(import.meta.url)('../data.json')

export function decript(message) {
  const arrMsg = message.split(' ')
  const msgDic = {}
  arrMsg.forEach((word) => {
    word = word.toLowerCase()
    Object.prototype.hasOwnProperty.call(msgDic, word) ? msgDic[word]++ : (msgDic[word] = 1)
  })
  const entries = Object.entries(msgDic)
  return entries.flat(2).join('')
}

export function decript2(message) {
  const arrMsg = message.split(' ')
  return arrMsg.reduce((acc, word) => {
    if (!acc[word]) acc[word] = 0
    acc[word]++
    return acc
  }, {})
}

console.log(decript(data))

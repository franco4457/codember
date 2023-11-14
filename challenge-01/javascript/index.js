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
  const diccMsg = message.split(' ').reduce((acc, word) => {
    word = word.toLowerCase()
    if (!acc[word]) acc[word] = 0
    acc[word]++
    return acc
  }, {})
  return Object.entries(diccMsg).flat(2).join('')
}

export function decript3(message) {
  const arrMsg = message.split(' ')
  const wordsMap = new Map()
  arrMsg.forEach((word) => {
    word = word.toLowerCase()
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1)
  })
  let result = ''
  for (const [key, value] of wordsMap) {
    result += key + value
  }
  return result
}

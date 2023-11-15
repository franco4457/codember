export function decript(data: string): string {
  const wordsDicc: Record<string, number> = {}
  data.split(' ').forEach((word) => {
    word = word.toLowerCase()
    return (wordsDicc[word] = wordsDicc[word] != null ? wordsDicc[word] + 1 : 1)
  })
  return Object.entries(wordsDicc).flat(1).join('')
}

export function decript2(message: string): string {
  const diccMsg = message.split(' ').reduce((acc, word) => {
    word = word.toLowerCase()
    acc[word] ? acc[word]++ : (acc[word] = 1)
    return acc
  }, {} as Record<string, number>)
  return Object.entries(diccMsg).flat(2).join('')
}

export function decript3(message: string): string {
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

export function decript4(message: string): string {
  const setMsg = new Set(message.toLowerCase().split(' '))
  let res = ''
  for (const word of setMsg) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi')
    const count = ` ${message} `.match(regex)?.length ?? 1
    res += word + count
  }
  return res
}

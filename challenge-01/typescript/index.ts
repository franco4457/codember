import { data } from '../data.json'

const decript = (data: string): string => {
  const wordsDicc: Record<string, number> = {}
  data.split(' ').forEach((word) => {
    word = word.toLowerCase()
    return (wordsDicc[word] = wordsDicc[word] != null ? wordsDicc[word] + 1 : 1)
  })
  return Object.entries(wordsDicc).flat(1).join('')
}

console.log(decript(data))

export function decoder(passLists: string, idxPass: number): string | undefined {
  const listArr = passLists.split('\n')
  const invalids: string[] = []
  listArr.forEach((item) => {
    const [policy, pass] = item.split(': ')
    const [minMax, key] = policy.split(' ')
    const [min, max] = minMax.split('-')

    let count = 0
    pass.split('').forEach((char) => {
      if (char === key) count++
    })
    if (count < Number(min) || count > Number(max)) invalids.push(pass)
  })
  return invalids.at(idxPass)
}

export function decoder2(passLists: string, idxPass: number): string | undefined {
  const listArr = passLists.split('\n')
  const invalids: string[] = []
  for (let i = 0; i < listArr.length; i++) {
    if (invalids.at(idxPass)) return invalids.at(idxPass)
    const [policy, pass] = listArr[i].split(': ')
    const [minMax, key] = policy.split(' ')
    const [min, max] = minMax.split('-')
    let count = 0
    pass.split('').forEach((char) => {
      if (char === key) count++
    })
    if (count < Number(min) || count > Number(max)) invalids.push(pass)
  }
  return undefined
}

export function decoder3(passLists: string, idxPass: number): string | undefined {
  let min = passLists[0]
  let max = null
  let key = null
  let pass = null
  let count = 0
  const invalids = []
  for (let i = 0; i < passLists.length; i++) {
    const char = passLists[i]
    if (char === ':') {
      key = passLists[i - 1]
      i++
      continue
    }
    if (char === '-') {
      max = passLists[i + 1]
      continue
    }

    if (key === char) count++
    if (char === '\n') {
      if (count < Number(min) || count > Number(max)) {
        invalids.push(pass)
        if (invalids.at(idxPass)) return invalids?.at(idxPass) ?? undefined
      }
      count = 0
      min = passLists[i + 1]
      max = null
      key = null
      pass = null
      continue
    }
    if (max == null && isNaN(+char)) min.concat(char)
    if (isNaN(+char) && key != null) pass == null ? (pass = char) : (pass += char)
  }
  return undefined
}

export const decoder4 = (initialPassLists: string, idxPass: number): string | undefined => {
  const recursiveCoder = (
    passLists: string,
    {
      count,
      min,
      max,
      key,
      pass,
      invalids = []
    }: {
      count: number
      min: string
      max: string | null
      key: string | null
      pass: string | null
      invalids?: string[]
    }
  ): string | undefined => {
    if (passLists.length === 0) return invalids.at(idxPass)
    const currentChar = passLists[0]

    if (currentChar === '\n') {
      if (count < Number(min) || count > Number(max)) {
        invalids = [...invalids, pass ?? '']
        if (invalids.at(idxPass)) return invalids?.at(idxPass)
      }
      count = 0
      min = ''
      max = null
      key = null
      pass = null
      return recursiveCoder(passLists.slice(1), { count, min, max, key, pass, invalids })
    }
    if (currentChar === ':') {
      return recursiveCoder(passLists.slice(1), { count, min, max, key, pass, invalids })
    }
    if (currentChar === '-') {
      return recursiveCoder(passLists.slice(1), { count, min, max: '-', key, pass, invalids })
    }
    if (max === '-') {
      return recursiveCoder(passLists.slice(1), {
        count,
        min,
        max: currentChar,
        key,
        pass,
        invalids
      })
    }
    if (!isNaN(+currentChar) && key == null) {
      if (max == null) min += currentChar
      else max.concat(currentChar)
      return recursiveCoder(passLists.slice(1), { count, min, max, key, pass, invalids })
    }
    if (isNaN(+currentChar) && key == null) {
      return recursiveCoder(passLists.slice(1), {
        count,
        min,
        max,
        key: currentChar,
        pass,
        invalids
      })
    }
    if (key === currentChar) {
      count++
    }
    if (key != null && currentChar != ' ') {
      pass == null ? (pass = currentChar) : (pass += currentChar)
    }
    return recursiveCoder(passLists.slice(1), { count, min, max, key, pass, invalids })
  }

  return recursiveCoder(initialPassLists, { count: 0, min: '', max: null, key: null, pass: null })
}

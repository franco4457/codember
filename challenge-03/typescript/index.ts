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

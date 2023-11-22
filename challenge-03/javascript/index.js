export function decoder(passLists) {
  const listArr = passLists.split('\n')
  const invalids = []
  listArr.forEach((item) => {
    const [policy, pass] = item.split(': ')
    const [minMax, key] = policy.split(' ')
    const [min, max] = minMax.split('-')

    let count = 0
    pass.split('').forEach((char) => {
      if (char === key) count++
    })
    if (count < min || count > max) invalids.push(pass)
  })
  return invalids.at(41)
}

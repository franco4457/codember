export const unlockPassword = ({
  initValue,
  movements
}: {
  initValue: string
  movements: string
}): string => {
  const initValueToArray = initValue.split('')
  let x = 0
  for (let i = 0; i < movements.length; i++) {
    const movement = movements[i]
    const currPos = Number(initValueToArray[x])
    if (movement === 'L') x = x === 0 ? 0 : x - 1
    if (movement === 'R') x++
    if (movement === 'U') {
      initValueToArray[x] = currPos === 9 ? '0' : (currPos + 1).toString()
    }
    if (movement === 'D') {
      initValueToArray[x] = currPos === 0 ? '9' : (currPos - 1).toString()
    }
  }
  return initValueToArray.join('')
}

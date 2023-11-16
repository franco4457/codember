export function compiler(input) {
  let curr = ''
  let count = 0
  input.split('').forEach((char) => {
    if (char === '#') count++
    if (char === '@') count--
    if (char === '*') count *= count
    if (char === '&') curr += count
  })
  return curr
}

export function compiler2(input) {
  let res = ''
  let count = 0
  const ACTION_DICT = {
    '#': (v) => v + 1,
    '@': (v) => v - 1,
    '*': (v) => (v *= v),
    '&': (v) => {
      res += v
      return v
    }
  }
  for (const char of input) {
    count = ACTION_DICT[char](count)
  }
  return res
}

export function compiler3(input) {
  let res = ''
  const actionMap = new Map([
    ['#', (v) => v + 1],
    ['@', (v) => v - 1],
    ['*', (v) => (v *= v)],
    [
      '&',
      (v) => {
        res += v
        return v
      }
    ]
  ])
  let count = 0
  for (const char of input) {
    count = actionMap.get(char)(count)
  }
  return res
}

export function compiler4(input) {
  let res = ''
  const ACT_DICT = {
    '#': (v) => v + 1,
    '@': (v) => v - 1,
    '*': (v) => (v *= v),
    '&': (v) => {
      res += v
      return v
    }
  }
  input.split('').reduce((acc, curr) => {
    return ACT_DICT[curr](acc)
  }, 0)
  return res
}

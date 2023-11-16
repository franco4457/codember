enum Op {
  add = '#',
  sub = '@',
  mul = '*',
  print = '&'
}

export function compiler(input: string): string {
  let result: string = ''
  let current: number = 0
  input.split('').forEach((char) => {
    if (char === Op.add) current++
    if (char === Op.sub) current--
    if (char === Op.mul) current *= current
    if (char === Op.print) result += current
  })
  return result
}

export function compiler2(input: string): string {
  let res = ''
  let count = 0
  const ACTION_DICT: Record<string, (v: number) => number> = {
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

export function compiler3(input: string, curr: number = 0, res: string = ''): string {
  if (!input.length) return res
  if (input[0] === Op.print) return compiler3(input.slice(1), curr, res + curr)
  if (input[0] === Op.add) return compiler3(input.slice(1), curr + 1, res)
  if (input[0] === Op.sub) return compiler3(input.slice(1), curr - 1, res)
  if (input[0] === Op.mul) return compiler3(input.slice(1), curr * curr, res)
  return compiler3(input.slice(1), curr, res)
}

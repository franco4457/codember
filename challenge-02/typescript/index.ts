enum Operations {
  add = '#',
  sub = '@',
  mul = '*',
  print = '&'
}

export function compiler(input: string): string {
  let result: string = ''
  let current: number = 0
  input.split('').forEach((char) => {
    if (char === Operations.add) current++
    if (char === Operations.sub) current--
    if (char === Operations.mul) current *= current
    if (char === Operations.print) result += current
  })
  return result
}

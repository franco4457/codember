export function countSteps(data: string) {
  const instructions: string[] = data.split('\n')
  let accumulator = 0,
    lastAcc = 0
  instructions.forEach((instruction, index) => {
    const steps = instruction.split(' ')
    steps.forEach((step, i) => {})
  })
  return instructions
}

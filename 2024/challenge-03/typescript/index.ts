export function countSteps(data: string) {
  const instructions: string[] = data.split('\n')
  let accumulator = 0,
    lastAcc = 0
  instructions.forEach((instruction, index) => {
    const steps = instruction.split(' ')
    lastAcc = 0
    let i = 0
    while (true) {
      const step = Number(steps[i])
      steps[i] = `${step + 1}`
      if (isNaN(step)) {
        accumulator += lastAcc
        break
      }
      lastAcc++
      i = i + step
    }
  })
  return `${accumulator}-${lastAcc}`
}

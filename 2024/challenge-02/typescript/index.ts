export function detectPattern(data: string) {
  let correct = 0,
    incorrect = 0
  const tryList: string[] = data.split('\n')
  tryList.forEach((pass) => {
    ;[...pass].some((p, i) => {
      if (i - 1 === -1) return
      if (isNaN(Number(p)) && isNaN(Number(pass[i - 1]))) return p.localeCompare(pass[i - 1]) < 0
      if (!isNaN(Number(p)) && isNaN(Number(pass[i - 1]))) return true
      if (isNaN(Number(p)) && !isNaN(Number(pass[i - 1]))) return false
      if (Number(p) < Number(pass[i - 1])) return true
    })
      ? incorrect++
      : correct++
  })
  return `${correct}true${incorrect}false`
}

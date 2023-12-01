const isAlfa = /^[a-z0-9]+$/i
const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const validateUsers = (users: string[]) => {
  const res = users.filter((user) => {
    const [id, username, email, age, location] = user.split(',')
    if (!id || !isAlfa.test(id)) return true
    if (!username || !isAlfa.test(username)) return true
    if (!email || !isValidEmail.test(email)) return true
    if (age.length !== 0 && isNaN(Number(age))) return true
    if (location.length !== 0 && !isNaN(Number(location))) return true
    return false
  })
  return res.reduce((acc, curr) => {
    return (acc += curr.split(',')[1][0])
  }, '')
}

export const validateUsers2 = (users: string[]) => {
  let res = ''
  for (const user of users) {
    const [id, username, email, age, location] = user.split(',')
    if (!id || !isAlfa.test(id)) {
      res += username[0]
      continue
    }
    if (!username || !isAlfa.test(username)) {
      res += username[0]
      continue
    }
    if (!email || !isValidEmail.test(email)) {
      res += username[0]
      continue
    }
    if (age.length !== 0 && isNaN(Number(age))) {
      res += username[0]
      continue
    }
    if (location.length !== 0 && !isNaN(Number(location))) {
      res += username[0]
      continue
    }
  }
  return res
}

export const validateUsers3 = (users: string[]) => {
  let res = ''
  const DICC: Record<number, (val: string) => boolean> = {
    0: (id: string) => !id || !isAlfa.test(id),
    1: (username: string) => !username || !isAlfa.test(username),
    2: (email: string) => !email || !isValidEmail.test(email),
    3: (age: string) => age.length !== 0 && isNaN(Number(age)),
    4: (location: string) => location.length !== 0 && !isNaN(Number(location))
  }
  for (const user of users) {
    const data = user.split(',')
    for (let i = 0; i < data.length; i++) {
      if (DICC[i](data[i])) {
        res += data[1][0]
        break
      }
    }
  }
  return res
}

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

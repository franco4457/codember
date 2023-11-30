import { validateUsers } from '.'
import { data } from '../data.json'

const dataToArray = data.split('\n')

console.log(validateUsers(dataToArray))

import { validateUsers2 } from '.'
import { data } from '../data.json'

const dataToArray = data.split('\n')

console.log(validateUsers2(dataToArray))

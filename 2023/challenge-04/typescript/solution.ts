import { validateChecksum } from '.'
import { data } from '../data.json'

const dataToArray = data.split('\n')

console.log(validateChecksum(dataToArray)[32])

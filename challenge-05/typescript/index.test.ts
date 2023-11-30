import { data, solution } from '../data.json'
import { validateUsers } from './index'

describe('Challenge 05 - JavaScript', () => {
  it('Example - 01', () => {
    const sheet = [
      '1a421fa,alex,alex9@gmail.com,18,Barcelona',
      '9412p*m,maria,mb@hotmail.com,22,CDMX',
      '494ee0,madeval,mdv@twitch.tv,,',
      '494ee0,madeval,twitch.tv,22,Montevideo'
    ]
    expect(validateUsers(sheet)).toBe('mm')
  })
  it('Example - 02', () => {
    const sheet = [
      'aN21Mhj,yoHrWHE,oHrWHE@example,40,',
      'KVJd37LC,IzgjKS,izgjks@gmail.com,,paris',
      'RELT7fgmnD,dplQIl,,58,New York',
      'FQeos5,aMlzfe,amlzfe@gmail.com,lala,Berlin'
    ]
    expect(validateUsers(sheet)).toEqual('yda')
  })
  it('CHALLENGE', () => {
    const dataToArray = data.split('\n')
    expect(validateUsers(dataToArray)).toBe(solution)
  })
})

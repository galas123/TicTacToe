import { PUT_MARK } from '../constants'


export function putMark(number) {
  return {

    type   : PUT_MARK,
    payload:{
      number}  
  }
}


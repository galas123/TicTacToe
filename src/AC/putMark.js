import { PUT_MARK } from '../constants'


export function putMark(number) {
  console.log('AC putMark',number );
  return {

    type   : PUT_MARK,
    payload:{
      number}  
  }
}


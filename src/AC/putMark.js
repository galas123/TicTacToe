import { PUT_MARK } from '../constants'


export function putMark(side, number) {
  console.log('AC putMark', side, number );
  return {

    type   : PUT_MARK,
    payload:{
      number}  
  }
}


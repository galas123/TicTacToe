import { ONE_PLAYER, TWO_PLAYER} from '../constants'


export function choose1() {
  console.log('AC');
  return {
    type   : ONE_PLAYER
  }
}

export function choose2() {
  return {
    type   : TWO_PLAYER
  }
}

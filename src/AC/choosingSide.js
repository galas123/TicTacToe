import { CHOOSE_X, CHOOSE_0, RESET } from '../constants'


export function chooseX() {
  return {
    type   : CHOOSE_X
  }
}

export function choose0() {
  return {
    type   : CHOOSE_0
  }
}

export function reset() {
  return {
    type   : RESET
  }
}
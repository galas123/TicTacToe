import {PUT_MARK} from '../constants'

export const putMark = (number) => (
{
  type   : PUT_MARK,
  payload: {
    number
  }
}
);


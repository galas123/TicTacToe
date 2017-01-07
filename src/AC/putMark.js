import {PUT_MARK} from '../constants'

export const putMark = (number) => {
  
  return (dispatch, getState) => {
    const state=getState().game;
    const cell   = state.table[number];
    const winner = state.winner;
    if (!cell && !winner) {
      dispatch({
        type   : PUT_MARK,
        payload: {
          number
        }
      });
    }
  }
};


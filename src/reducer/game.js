import {CHOOSE_X, CHOOSE_0, PUT_MARK, RESET} from '../constants'


const defaultState = {
  players:2,
  side : 0,
  table: [null, null,null , null,null, null,null ,null,null]
};

export default (game = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHOOSE_X:
      return Object.assign({}, game, {side : 'x'});
    case CHOOSE_0:
      Object.assign({}, game, {side : '0'});
    case PUT_MARK:
      const table=[].concat(game.table);
      table.splice(payload.number,1,game.side);
      return Object.assign({}, game, {table});
    
    case RESET:
      return defaultState;
      
  }
  return game;
}

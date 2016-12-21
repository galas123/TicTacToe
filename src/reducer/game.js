import {CHOOSE_X, CHOOSE_0, PUT_MARK, RESET, SIDE_X, SIDE_O} from '../constants'


const defaultState = {
  winner:null,
  players:2,
  side :SIDE_X,
  table: [null, null,null , null,null, null,null ,null,null]

};

export default (game = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHOOSE_X:
      return Object.assign({}, game, {side : SIDE_X});

    case CHOOSE_0:
      return Object.assign({}, game, {side :SIDE_O});

    case PUT_MARK:
      const table=[].concat(game.table);
      const winner=getWinner(table);
      const isFullTable=(getEmptyCell(table)===false);

      if (!winner && !isFullTable) {
        table.splice(payload.number,1,game.side);
        if (game.players === 2) { //меняем игрока
          return Object.assign({}, game, {table}, {side: (game.side == SIDE_O)? SIDE_X : SIDE_O})
        }

        else {
          //игра с компом - шаг компьютера
        }
      }
       if(winner) {
         return Object.assign({}, game, {table},{winner:winner});
       }
       if (isFullTable){
         return Object.assign({}, game, {table},{winner:'nobody'});
       }

      return Object.assign({}, game, {table});
    
    case RESET:
      return defaultState;
      
  }
  return game;
}

function getWinner(table){
  if (table[0]===table[1] && table[1]===table[2] && table[0]) return table[0];
  if (table[3]===table[4] && table[4]===table[5]&& table[3]) return table[3];
  if (table[6]===table[7] && table[7]===table[8]&& table[6]) return table[6];
  if (table[0]===table[3] && table[3]===table[6] && table[0]) return table[0];
  if (table[1]===table[4] && table[4]===table[7]&& table[1]) return table[1];
  if (table[2]===table[5] && table[5]===table[8] && table[2]) return table[2];
  if (table[0]===table[4] && table[4]===table[8]&& table[0]) return table[0];
  if (table[2]===table[4] && table[4]===table[6] && table[2]) return table[2];
  return false;
}

function getEmptyCell(table){
  console.log('table', table);
  const emptyCell=table.indexOf(null);
  console.log('emptyCell', emptyCell);
  if (emptyCell===-1) {return false;} else {return emptyCell;}
}


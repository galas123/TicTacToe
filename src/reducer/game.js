import {CHOOSE_X, CHOOSE_0, PUT_MARK, RESET, SIDE_X, SIDE_O, ONE_PLAYER, TWO_PLAYER, NOBODY} from '../constants'


const defaultState = {
  winner:null,
  players:null,
  side :null,
  table: [null, null,null , null,null, null,null ,null,null],
  step:1

};

export default (game = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHOOSE_X:
      return changeState(game,{side : SIDE_X});

    case CHOOSE_0:
      let firstState;
      if (game.players===1){
        firstState=changeState(game, {table:[].concat(game.table), side : SIDE_O});
        firstState=computerStepX(firstState);
      }
      return firstState;

    case ONE_PLAYER:
    return changeState(game, {players:1});

    case TWO_PLAYER:
      return changeState (changeState(game,{side : SIDE_X}),{players :2});
    
    case PUT_MARK:
      const table=[].concat(game.table);

      table.splice(payload.number,1,game.side);
      let winner=getWinner(table);
      let isFullTable=(getEmptyCell(table)===false);
      let newState=Object.assign({}, game, {table});

      if (!winner && !isFullTable) {
        if (game.players === 2) {
          //игра с человеком, смена игрока
          newState=changeState (newState, {side: changeSide(game.side)})
        }
        if (game.players === 1) {
         //игра с компом - шаг компьютера
          if (game.side===SIDE_O) {
            newState = computerStepX(Object.assign({}, game, {table}));
          }
          if (game.side===SIDE_X) {
            newState = computerStepO(Object.assign({}, game, {table}));
          }
          winner=getWinner(newState.table);
          isFullTable=(getEmptyCell(newState.table)===false);
        }
      }

       if(winner) {
         return Object.assign({}, newState,{winner:winner});
       }
       if (isFullTable){
         return Object.assign({}, newState, {winner:NOBODY});
       }

      return newState;
    
    case RESET:
      return defaultState;
      
  }
  return game;
}
function changeSide(currentSide){

  return (currentSide === SIDE_O)? SIDE_X : SIDE_O
}

function changeState(game, change){
  return Object.assign({}, game, change)
}
function computerStepO(state){
  switch (state.step) {
    case 1:
      if (!state.table[4]) {
        state.table[4]= SIDE_O;
      } else {
        state.table[0]=SIDE_O;
      }
      break;
    default:
      let potentialStep;
      potentialStep = searchPotentialStep(state.table, SIDE_O);
      if (potentialStep){state.table[potentialStep]=SIDE_O}
      else{
        potentialStep = searchPotentialStep(state.table, SIDE_X);
        if (potentialStep){state.table[potentialStep]=SIDE_O}
        else{
          state.table[getEmptyCell(state.table)]=SIDE_O;
        }
      }
  }
  state.step=state.step+1
  return state;
}

function computerStepX(state){
  switch (state.step){
    case 1:
      state.table[4]=SIDE_X;
      break;
    case 2:
      if (!state.table[0]){
      state.table[0]=SIDE_X
    } else {
      state.table[2]=SIDE_X
    }
      break;
    default:
      let potentialStep;
      potentialStep = searchPotentialStep(state.table, SIDE_X);
      if (potentialStep){state.table[potentialStep]=SIDE_X}
      else{
        potentialStep = searchPotentialStep(state.table, SIDE_O);
        if (potentialStep){state.table[potentialStep]=SIDE_X}
        else{
          state.table[getEmptyCell(state.table)]=SIDE_X;
        }
      }
  }
  state.step=state.step+1
  return state;
}
function searchPotentialStep(table, sign){
  let emptyCell=checkPotentialStepInLine(table, sign,0,1,2)||checkPotentialStepInLine(table, sign,3,4,5)
    || checkPotentialStepInLine(table, sign,6,7,8)||checkPotentialStepInLine(table, sign,0,3,6)
    || checkPotentialStepInLine(table, sign,1,4,7)|| checkPotentialStepInLine(table, sign,2,5,8)
    || checkPotentialStepInLine(table, sign,0,4,8)|| checkPotentialStepInLine(table, sign,2,4,6);
   return emptyCell;
}


function checkPotentialStepInLine(table, sign, x,y,z){
  const quantitySign=[table[x],table[y],table[z]].reduce(function(prev,item){if (item===sign){return prev+1}; return prev;},0);
  let emptyCell=[table[x],table[y],table[z]].indexOf(null);
  if (emptyCell!==-1){
    switch (emptyCell){
      case 0: emptyCell=x; break;
      case 1: emptyCell=y; break;
      case 2: emptyCell=z; break;
    }
  }
  if (quantitySign==2 && emptyCell!==-1 ){
    return emptyCell
  }
  return false;
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
  const emptyCell=table.indexOf(null);
  if (emptyCell===-1) {return false;} else {return emptyCell;}
}


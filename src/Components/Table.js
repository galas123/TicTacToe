import React, {Component} from 'react';
import '../App.css';
import GameCell from './gameCell'



export default class Table extends Component {

  render() {
    return (
      <div className="game-table">
        <div className="game-table__row">
          <GameCell key="0" numberCell={"0"}/>
          <GameCell key="1" numberCell={"1"}/>
          <GameCell key="2" numberCell={"2"}/>
        </div>
        <div className="game-table__row">
          <GameCell key="3" numberCell={"3"}/>
          <GameCell key="4" numberCell={"4"}/>
          <GameCell key="5" numberCell={"5"}/>
        </div>
        <div className="game-table__row">
          <GameCell key="6" numberCell={"6"}/>
          <GameCell key="7" numberCell={"7"}/>
          <GameCell key="8" numberCell={"8"}/>
        </div>
      </div>
    )
  }
}

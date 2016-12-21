import {chooseX, choose0, reset} from './AC/choosingSide'
import { SIDE_X, SIDE_O } from './constants'
import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import ChooseSideBtn from './Components/chooseSideBtn'
import GameCell from './Components/gameCell'
import Reset from './Components/reset'
import Greeting from './Components/greeting'


class App extends Component {

  render() {
    const {side, chooseX, choose0, reset}=this.props;
    return (
      <div className="wrapper">
        <h1>Tic Tac Toe</h1>
        <div className="choosing-game">
          <button className="choosing-game-btn choosing-game-one">One player</button>
          <button className="choosing-game-btn choosing-game-two">Two players</button>
        </div>
        <div className="choosing-side">
          <ChooseSideBtn command={()=>chooseX()} caption={SIDE_X} />
          <ChooseSideBtn command={()=>choose0()} caption={SIDE_O} />
          <div className="choosed-game-side">выбран {side}</div>
        </div>
        
        <div className="game-table">
          <div className="raw">
            <GameCell key="0" numberCell={"0"}/>
            <GameCell key="1" numberCell={"1"}/>
            <GameCell key="2" numberCell={"2"}/>
          </div>
          <div className="raw">
            <GameCell key="3" numberCell={"3"}/>
            <GameCell key="4" numberCell={"4"}/>
            <GameCell key="5" numberCell={"5"}/>
          </div>
          <div className="raw">
            <GameCell key="6" numberCell={"6"}/>
            <GameCell key="7" numberCell={"7"}/>
            <GameCell key="8" numberCell={"8"}/>
          </div>
        </div>
        <div className="reset">
          <Reset command={()=>reset()} text='Reset'/>
        </div>
        <div className="greeting">
          <Greeting/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state=>({
  table: state.game.table,
  side : state.game.side
})

export default connect(mapStateToProps, {chooseX, choose0, reset})(App);


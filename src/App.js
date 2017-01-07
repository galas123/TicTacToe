import React, {Component} from 'react';
import {connect} from 'react-redux';

import {reset} from './AC/choosingSide';

import Reset from './Components/reset';
import Greeting from './Components/greeting';
import ChooseSide from './Components/ChooseSide';
import ChoosePlayers from './Components/ChoosePlayers';
import Table from './Components/Table'

import './App.css';


class App extends Component {

  render() {
    const {side, playersCount, reset}=this.props;
    let content;
    if (!playersCount) {
      content = <ChoosePlayers/>;
    } else {
      const needToChooseSide = !side && playersCount === 1;
      content = needToChooseSide ? <ChooseSide/> : <Table/>;
    }
    return (
      <div className="wrapper">
        <h1 className="caption">Tic Tac Toe</h1>
        <div className="greeting">
          <Greeting/>
        </div>
        <div className="reset">
          <Reset command={()=>reset()} text="Reset"/>
        </div>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state=>({
  side        : state.game.side,
  playersCount: state.game.playersCount
});

export default connect(mapStateToProps, {reset})(App);


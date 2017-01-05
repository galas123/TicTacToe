import {reset} from './AC/choosingSide'
import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import Reset from './Components/reset'
import Greeting from './Components/greeting'
import ChooseSide from './Components/ChooseSide'
import ChoosePlayers from './Components/ChoosePlayers'
import Table from './Components/Table'


class App extends Component {

  render() {
    const {side, players, reset}=this.props;
    let content;
    if (!players) {
      content=(<ChoosePlayers/>);
    } else {
      if (!side && players===1) {
        content = (<ChooseSide/>);
      }
      else {
        content = (<Table/>);
      }
    }

    return (
      <div className="wrapper">
        <h1 className="caption">Tic Tac Toe</h1>

        <div className="greeting">

          <Greeting/>

        </div>

        <div className="reset">
          <Reset command={()=>reset()} text='Reset'/>
        </div>
        
        {content}
        
        
      </div>
    );
  }
}

const mapStateToProps = state=>({
  table: state.game.table,
  side : state.game.side,
  players:state.game.players
});

export default connect(mapStateToProps, {reset})(App);


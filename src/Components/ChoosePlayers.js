import React, {Component} from 'react';
import {connect} from 'react-redux'

import {choose1, choose2} from '../AC/choosingPlayer'

import ChoosePlayerBtn from './ChoosePlayerBtn'

class ChoosePlayers extends Component {
  render() {
    return (
      <div className="choosing-game">
        <ChoosePlayerBtn
          className="choosing-game-btn choosing-game-one"
          command={this.chooseOnePlayer}
          caption={'1 player'}
        />
        <ChoosePlayerBtn
          className="choosing-game-btn choosing-game-two"
          command={this.chooseTwoPlayers}
          caption={'2 players'}
        />
      </div>
    )
  }

  chooseOnePlayer = () => {
    this.props.choose1();
  };

  chooseTwoPlayers = () => {
    this.props.choose2();
  };
}

export default connect(null, {choose1, choose2})(ChoosePlayers);
import {choose1, choose2} from '../AC/choosingPlayer'
import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../App.css';
import ChoosePlayerBtn from './ChoosePlayerBtn'



class ChoosePlayers extends Component {

  render() {
    const {choose1, choose2}=this.props;
    return (
      <div className="choosing-game">
        <ChoosePlayerBtn className="choosing-game-btn choosing-game-one" command={()=>choose1()} caption={'One player'}/>
        <ChoosePlayerBtn className="choosing-game-btn choosing-game-two" command={()=>choose2()} caption={'Two players'}/>
      </div>
    )
  }
}

export default connect(null, {choose1, choose2})(ChoosePlayers);
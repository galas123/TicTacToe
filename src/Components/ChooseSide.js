import {chooseX, choose0} from '../AC/choosingSide'
import { SIDE_X, SIDE_O } from '../constants'
import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../App.css';
import ChooseSideBtn from './chooseSideBtn'


class ChooseSide extends Component {

  render() {
    const {side, chooseX, choose0}=this.props;
    return (
      <div className="choosing-side">
        <div className="choosed-game-side">Would you like X or O?</div>
        <ChooseSideBtn command={()=>chooseX()} caption={SIDE_X}/>
        <ChooseSideBtn command={()=>choose0()} caption={SIDE_O}/>
      </div>
    )
  }
}


const mapStateToProps = state=>({
  table: state.game.table,
  side : state.game.side
})

export default connect(mapStateToProps, {chooseX, choose0})(ChooseSide);
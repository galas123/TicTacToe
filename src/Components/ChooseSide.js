import React, {Component} from 'react';
import {connect} from 'react-redux'

import {SIDE_X, SIDE_O} from '../constants'

import {chooseX, choose0} from '../AC/choosingSide'

import ChooseSideBtn from './chooseSideBtn'

class ChooseSide extends Component {

  render() {
    return (
      <div className="choose-side">
        <div className="choose-side__label">
          Would you like X or O?
        </div>
        <ChooseSideBtn command={this.chooseX} caption={SIDE_X}/>
        <ChooseSideBtn command={this.chooseO} caption={SIDE_O}/>
      </div>
    )
  }

  chooseX = () => {
    this.props.chooseX();
  };

  chooseO = () => {
    this.props.choose0();
  };
}

export default connect(null, {chooseX, choose0})(ChooseSide);
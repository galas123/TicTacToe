import React, {
  Component
} from 'react';
import {connect} from 'react-redux'

import {reset} from '../AC/choosingSide'

class Reset extends Component {
  render() {
    const {text}=this.props;

    return (
      <button className="reset" onClick={this.clickReset}>{text}</button>
    );
  }

  clickReset = (ev) => {
    const {command}=this.props;
    ev.preventDefault();
    command();
  }
}

export default connect(null, {reset})(Reset);

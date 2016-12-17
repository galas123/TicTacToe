import React, {
  Component
} from 'react';
import {reset} from '../AC/choosingSide'
import cx from 'classnames'
import {connect} from 'react-redux'

class Reset extends Component {

  render() {
    const {command, text}=this.props;

    return (
      <button className={cx('reset')} onClick={this.clickReset}>{text}</button>
    );
  }


  clickReset = (ev) => {
    const {command}=this.props;
    ev.preventDefault();
    command();
  }
}

export default connect(null, {reset})(Reset);

import React, {
  Component,
  PropTypes,
} from 'react';

import cx from 'classnames'

export default class chooseSideBtn extends Component {

  render() {
    const {caption}=this.props;
    return (
      <button className={cx('choosing-game-btn')} onClick={this.clickCalcButton}>{caption}</button>
    );
  }

  clickCalcButton = (ev) => {
    const {command}=this.props;
    ev.preventDefault()
    command()
  }
}
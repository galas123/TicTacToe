import React, {
  Component,
  PropTypes,
} from 'react';

import cx from 'classnames'

export default class chooseSideBtn extends Component {

  render() {
    const {caption}=this.props;
    return (
      <button className={cx('choosing-game-btn')} onClick={this.clickTable}>{caption}</button>
    );
  }

  clickTable = (ev) => {
    const {command}=this.props;
    ev.preventDefault()
    command()
  }
}
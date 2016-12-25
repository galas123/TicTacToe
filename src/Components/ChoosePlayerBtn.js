import React, {
  Component,
  PropTypes,
} from 'react';

import cx from 'classnames'

export default class choosePlayerBtn extends Component {

  render() {
    const {caption}=this.props;
    return (
      <button className={cx('choosing-game-btn')} onClick={this.clickBtn}>{caption}</button>
    );
  }

  clickBtn = (ev) => {
    const {command}=this.props;
    ev.preventDefault()
    console.log('clickBtn');
    command()
  }
}
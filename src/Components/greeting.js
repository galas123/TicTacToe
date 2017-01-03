import React, {
  Component
} from 'react';
import cx from 'classnames'
import {connect} from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'

class Greeting extends Component {

  render() {
    const {winner} = this.props;
    let content;

    if (!winner) {
      content=null;
    } else {
      if (winner !== 'nobody') {
        content = (<div className={cx('winner')}>The Winner is {winner}</div>)
      } else {
        content = (<div className={cx('winner')}>Draw!</div>)
      }
    }
    return (
    <CSSTransition
      transitionName="winner"

      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}>
      {content}
    </CSSTransition>
    )
  }
}

const mapStateToProps = state=>({
  winner: state.game.winner
});

export default connect(mapStateToProps, null)(Greeting);
import React, {
  Component
} from 'react';
import cx from 'classnames'
import {connect} from 'react-redux'

class Greeting extends Component {

  render() {
    const {winner} = this.props;

    if (!winner) {
      return null;
    }
    if (winner !== 'nobody') {
        return (
          <div className={cx('winner')}>Итак, победил {winner}</div>
        )
      } else {
        return (
          <div className={cx('winner')}>Ничья!</div>
        )
      }


  }
}
const mapStateToProps = state=>({
  winner: state.game.winner
})

export default connect(mapStateToProps, null)(Greeting);
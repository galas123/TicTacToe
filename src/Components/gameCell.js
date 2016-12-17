import React, {
  Component
} from 'react';
import {putMark} from '../AC/putMark'
import cx from 'classnames'
import {connect} from 'react-redux'

class GameCell extends Component {

  render() {
    const {numberCell, table}=this.props;

    return (
      <div className={cx('game-cell')} onClick={this.clickPutMark}>{table[numberCell]}</div>
    );
  }


    clickPutMark = (ev) => {
    const {numberCell, side, putMark}=this.props;
      ev.preventDefault();
      putMark(numberCell);
  }
}

const mapStateToProps = state=>({
  side : state.game.side,
  table : state.game.table,
  players:state.game.players
})

export default connect(mapStateToProps, {putMark})(GameCell);
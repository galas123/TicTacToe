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
    const {numberCell, putMark,table,winner}=this.props;
      ev.preventDefault();
      if (table[numberCell]===null && winner===null){
        putMark(numberCell);
      }
  }
}

const mapStateToProps = state=>({
  side : state.game.side,
  table : state.game.table,
  players:state.game.players,
  winner:state.game.winner
})

export default connect(mapStateToProps, {putMark})(GameCell);
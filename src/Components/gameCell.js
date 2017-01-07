import React, {
  Component
} from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';

import {SIDE_O} from '../constants';

import {putMark} from '../AC/putMark';

class GameCell extends Component {
  render() {
    const {numberCell, table}=this.props;
    const isO = table[numberCell] === SIDE_O;
    return (
      <div
        className={cx('game-cell',{'game-cell--type-o':isO})}
        onClick={this.clickPutMark}
      >
        {table[numberCell]}
      </div>
    );
  }


  clickPutMark = (ev) => {
    const {numberCell, putMark, table, winner}=this.props;
    ev.preventDefault();
    if (table[numberCell] === null && winner === null) {
      putMark(numberCell);
    }
  }
}

const mapStateToProps = state=>({
  table       : state.game.table,
  winner      : state.game.winner
})

export default connect(mapStateToProps, {putMark})(GameCell);
import React, {
  Component,
  PropTypes,
} from 'react';

export default class choosePlayerBtn extends Component {
  render() {
    const {caption}=this.props;
    return (
      <button
        className="choosing-game-btn"
        onClick={this.clickBtn}
      >
        {caption}
      </button>
    );
  }

  clickBtn = (ev) => {
    const {command}=this.props;
    ev.preventDefault();
    command();
  };

}
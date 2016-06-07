import React, { Component, PropTypes } from 'react';
import style from './textarea.css';

class TextArea extends Component {

  static propTypes = {
    value: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.textarea = null;
  }

  handleFocus = () => {
    this.select();
  }

  handleDoubleClick = () => {
    this.select();
  }

  select = () => {
    this.textarea.select();
  }

  render() {
    const { value } = this.props;

    return (
      <textarea
        ref={(textarea) => (this.textarea = textarea)}
        className={style.textarea}
        value={value}
        onFocus={this.handleFocus}
        onDoubleClick={this.handleDoubleClick}
      />
    );
  }
}

export default TextArea;

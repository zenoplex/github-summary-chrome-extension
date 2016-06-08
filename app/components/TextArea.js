import React, { Component, PropTypes } from 'react';
import style from './textarea.css';

class TextArea extends Component {

  static propTypes = {
    value:    PropTypes.string,
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.textarea = null;
  }

  handleFocus = () => {
    this.select();
  };

  handleDoubleClick = () => {
    this.select();
  };

  select = () => {
    this.textarea.select();
  };

  render() {
    const { value, disabled, ...props } = this.props;

    return (
      <textarea
        {...props}
        ref={(textarea) => (this.textarea = textarea)}
        className={style.textarea}
        value={value}
        disabled={disabled}
        onFocus={this.handleFocus}
        onDoubleClick={this.handleDoubleClick}
      />
    );
  }
}

export default TextArea;

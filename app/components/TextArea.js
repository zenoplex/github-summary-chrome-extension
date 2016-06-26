// @flow

import React, { Component } from 'react';
import style from './textarea.css';

type Props = {
  value: ?string,
  disabled: ?boolean,
}

class TextArea extends Component {

  props: Props;
  textarea: HTMLTextAreaElement;

  handleFocus: () => void = () => {
    this.select();
  };

  handleDoubleClick: () => void = () => {
    this.select();
  };

  select: () => void = () => {
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

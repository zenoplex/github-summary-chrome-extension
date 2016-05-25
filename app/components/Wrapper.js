import React, { PropTypes } from 'react';
import style from './wrapper.css';

const Wrapper = ({ children, ...props }) =>
  <div className={style.wrapper} {...props}>
    {children}
  </div>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

const ContentWrapper = ({ children, ...props }) =>
  <div className={style.contentWrapper} {...props}>{children}</div>;

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

export {
  Wrapper,
  ContentWrapper,
};


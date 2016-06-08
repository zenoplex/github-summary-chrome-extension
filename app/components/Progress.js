import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { progress, progressInner } from './progress.css';

const Progress = ({ show, color, ...props }) =>
  <div className={progress} style={{ display: show ? 'block' : 'none' }}>
    <div className={progressInner}>
      <CircularProgress color={color} {...props} />
    </div>
  </div>;

Progress.propTypes = {
  show:  PropTypes.bool,
  color: PropTypes.string,
};

export default Progress;

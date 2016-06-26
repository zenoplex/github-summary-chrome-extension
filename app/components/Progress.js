// @flow

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { progress, progressInner } from './progress.css';

type Props = {
  show?: boolean,
  color?: string,
}

const Progress = ({ show, color, ...props }: Props) =>
  <div className={progress} style={{ display: show ? 'block' : 'none' }}>
    <div className={progressInner}>
      <CircularProgress color={color} {...props} />
    </div>
  </div>;

export default Progress;

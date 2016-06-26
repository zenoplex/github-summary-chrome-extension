// @flow

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import style from './footer.css';

type Props = {
  onGenerateClick?: () => any,
  disabled?: boolean,
}

const Footer = ({ onGenerateClick, disabled }: Props) =>
  <Toolbar className={style.footer} noGutter>
    <ToolbarGroup />
    <ToolbarGroup>
      <RaisedButton
        primary
        label="generate summary"
        onClick={onGenerateClick}
        disabled={disabled}
      />
    </ToolbarGroup>
  </Toolbar>;

export default Footer;

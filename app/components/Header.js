// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';
import Extension from 'material-ui/svg-icons/action/extension';

type Props = {
  onIconRightTap?: () => any,
}

const Header = ({ onIconRightTap }: Props) =>
  <AppBar
    title="GitHub summary extension"
    iconElementLeft={<IconButton><Extension /></IconButton>}
    iconElementRight={
      <IconButton onTouchTap={onIconRightTap}><Settings /></IconButton>
    }
  />;

export default Header;

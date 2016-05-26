import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';
import Extension from 'material-ui/svg-icons/action/extension';

const Header = ({ onIconRightTap }) =>
  <AppBar
    title="GitHub summary extension"
    iconElementLeft={<IconButton><Extension /></IconButton>}
    iconElementRight={
      <IconButton onTouchTap={onIconRightTap}><Settings /></IconButton>
    }
  />;

Header.propTypes = {
  onIconRightTap: PropTypes.func,
};

export default Header;

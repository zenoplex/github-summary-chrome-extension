import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Header = ({ onIconRightTap }) =>
  <AppBar
    title="Title"
    showMenuIconButton={false}
    iconElementRight={
      <IconButton onTouchTap={onIconRightTap}><MoreVertIcon /></IconButton>
    }
  />;

Header.propTypes = {
  onIconRightTap: PropTypes.func,
};

export default Header;

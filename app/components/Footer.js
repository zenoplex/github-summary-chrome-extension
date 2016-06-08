import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import style from './footer.css';

const Footer = ({ onGenerateClick, disabled }) =>
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

Footer.propTypes = {
  onGenerateClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Footer;

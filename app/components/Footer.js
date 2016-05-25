import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import style from './footer.css';

const Footer = ({ onGenerateClick }) =>
  <Toolbar className={style.footer} noGutter>
    <ToolbarGroup />
    <ToolbarGroup>
      <RaisedButton primary label="generate summary" onClick={onGenerateClick} />
    </ToolbarGroup>
  </Toolbar>;

Footer.propTypes = {
  onGenerateClick: PropTypes.func,
};

export default Footer;

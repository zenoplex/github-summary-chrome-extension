import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import style from './sidebar.css';

const Sidebar = ({ onRequestChange, onSaveClick, ...props }) =>
  <Drawer openSecondary docked={false} onRequestChange={onRequestChange} {...props}>
    <List>
      <Subheader>General</Subheader>
      <ListItem className={style.listItem} disabled>
        <TextField
          floatingLabelText="GitHub username"
          fullWidth
        />
      </ListItem>
      <ListItem className={style.listItem} disabled>
        <TextField
          floatingLabelText="token"
          fullWidth
        />
      </ListItem>

    </List>
    <List>
      <Subheader>Options</Subheader>
      <ListItem primaryText="output as markdown" leftCheckbox={<Checkbox />} />
      <ListItem primaryText="request all pages" leftCheckbox={<Checkbox />} />
      <ListItem primaryText="request per page" leftCheckbox={<Checkbox />} />
      <ListItem disabled>
        <RaisedButton label="save" primary onClick={onSaveClick} />
      </ListItem>
    </List>
  </Drawer>;

Sidebar.propTypes = {
  onRequestChange: PropTypes.func,
  onSaveClick:     PropTypes.func,
};

export default Sidebar;

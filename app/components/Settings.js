import React from 'react';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Settings = ({ ...props }) =>
  <Drawer openSecondary docked={false} {...props}>
    <List>
      <Subheader>General</Subheader>
      <ListItem
        primaryText={
          <TextField
            hintText="Github username"
            fullWidth
          />
        }
        disabled
      />
      <ListItem
        primaryText={
          <TextField
            type="password"
            hintText="token"
            fullWidth
          />
        }
        disabled
      />

    </List>
    <List>
      <Subheader>Options</Subheader>
      <ListItem primaryText="output as markdown" leftCheckbox={<Checkbox />} />
      <ListItem primaryText="request all pages" leftCheckbox={<Checkbox />} />
      <ListItem primaryText="request per page" leftCheckbox={<Checkbox />} />
      <ListItem disabled>
        <RaisedButton label="save" primary />
      </ListItem>
    </List>
  </Drawer>;

export default Settings;

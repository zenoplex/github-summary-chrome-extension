import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { Grid, Col, Row } from 'react-flexbox-grid/lib/index';
import RaisedButton from 'material-ui/RaisedButton';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.handleIconRightTap = this.handleIconRightTap.bind(this);
  }

  handleIconRightTap() {
    const { actions } = this.props;
    actions.toggleDrawer();
  }

  render() {
    return (
      <div>
        <Header onIconRightTap={this.handleIconRightTap} />

        <RaisedButton label="exec" primary />

        <Drawer open={false} openSecondary docked={false}>
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
        </Drawer>
      </div>
    );
  }
}
Dashboard.propTypes = {};

export default Dashboard;

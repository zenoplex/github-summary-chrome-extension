import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import style from './sidebar.css';
import { reduxForm } from 'redux-form';

const Sidebar = ({ onRequestChange, onSaveClick, fields, ...props }) =>
  <Drawer openSecondary docked={false} onRequestChange={onRequestChange} {...props}>
    <form
      onSubmit={e => { e.preventDefault(); return onSaveClick(); }}
      autoComplete="off"
    >
      <List>
        <ListItem className={style.listItem} disabled>
          <TextField
            floatingLabelText="GitHub username"
            fullWidth
            { ...fields.username }
            required
          />
        </ListItem>
        <ListItem className={style.listItem} disabled>
          <TextField
            floatingLabelText="token"
            fullWidth
            { ...fields.token }
          />
        </ListItem>
      </List>
      <List>
        <Subheader>Options</Subheader>
        <ListItem
          primaryText="output as markdown"
          leftCheckbox={
            <Checkbox
              checked={fields.markdown.checked}
              onCheck={fields.markdown.onChange}
              value="markdown"
            />
          }
        />
        <ListItem
          primaryText="request all pages"
          leftCheckbox={
            <Checkbox
              checked={fields.requestAllPages.checked}
              onCheck={fields.requestAllPages.onChange}
              value="requestAllPages"
            />
          }
        />
        <Subheader>For formatter {'{flag}'} option</Subheader>
        <ListItem className={style.listItem} disabled>
          <TextField
            floatingLabelText="merged label"
            floatingLabelFixed
            fullWidth
            { ...fields.mergedTag }
          />
        </ListItem>
        <ListItem className={style.listItem} disabled>
          <TextField
            floatingLabelText="closed label"
            floatingLabelFixed
            fullWidth
            { ...fields.closedTag }
          />
        </ListItem>
        <ListItem disabled>
          <RaisedButton type="submit" label="save" primary onClick={onSaveClick} />
        </ListItem>
      </List>
    </form>
  </Drawer>;

Sidebar.propTypes = {
  onRequestChange: PropTypes.func,
  onSaveClick:     PropTypes.func,
  fields:          PropTypes.object,
};

export default reduxForm({
  form:   'sidebar',
  fields: ['username', 'token', 'mergedTag', 'closedTag', 'requestAllPages', 'markdown'],
})(Sidebar);

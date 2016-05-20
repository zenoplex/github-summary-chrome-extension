import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as drawersActions from '../actions/drawers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './Dashboard';

injectTapEventPlugin();

const App = ({ actions }) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Dashboard actions={actions} />
  </MuiThemeProvider>
  ;

App.propTypes = {
  actions: PropTypes.object,
};

export default connect(
  state => ({ todos: state.todos }),
  dispatch => ({ actions: bindActionCreators(drawersActions, dispatch) })
)(App);

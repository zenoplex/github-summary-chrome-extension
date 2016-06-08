import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './Dashboard';

injectTapEventPlugin();

const App = ({ ...props }) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Dashboard {...props} />
  </MuiThemeProvider>
  ;

App.propTypes = {
  actions: PropTypes.object,
};

export default connect(
  ({ settings, sidebar, summary, dates, api }) => ({ settings, sidebar, summary, dates, api }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(App);

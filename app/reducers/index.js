import { combineReducers } from 'redux';
import settings from './settings';
import sidebar from './sidebar';
import summary from './summary';
import dates from './dates';
import { reducer as form } from 'redux-form';

export default combineReducers({
  settings,
  sidebar,
  summary,
  dates,
  form,
});

import { take, put, call, fork, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

console.log(put, call, fork, select);

function* fetchSummary() {
  while (true) {
    yield take(types.TOGGLE_SIDEBAR);
  }
}


export default function* root() {
  yield [
    fork(fetchSummary),
  ];
}

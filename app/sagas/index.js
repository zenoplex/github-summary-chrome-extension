import { take, put, call, fork, select } from 'redux-saga/effects';
import GithubSummary from 'github-summary';
import * as types from '../constants/ActionTypes';

function* generateSummary() {
  while (true) {
    yield take(types.GENERATE_SUMMARY);

    const { username, token } = yield select(state => state.settings);
    const githubSummary = new GithubSummary({
      username,
      token,
    });
    const summary = yield call(githubSummary.getSummary.bind(githubSummary));
    yield put({ type: types.RECEIVE_SUMMARY, payload: summary });
  }
}

export default function* root() {
  yield [
    fork(generateSummary),
  ];
}

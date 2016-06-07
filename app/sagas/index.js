import { takeLatest } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import GithubSummary from 'github-summary';
import * as types from '../constants/ActionTypes';

function* fetchSummary() {
  try {
    const settings = yield select(state => state.settings);
    const params = { ...settings };
    if (!params.formatter) delete params.formatter;

    const githubSummary = new GithubSummary(params);
    const summary = yield call([githubSummary, githubSummary.getSummary]);
    yield put({ type: types.SUMMARY_FETCH_SUCCESS, payload: summary });
  } catch (err) {
    yield put({ type: types.SUMMARY_FETCH_FAIL });
  }
}

function* generateSummary() {
  yield* takeLatest(types.SUMMARY_FETCH_REQUEST, fetchSummary);
}


export default function* root() {
  yield [
    fork(generateSummary),
  ];
}

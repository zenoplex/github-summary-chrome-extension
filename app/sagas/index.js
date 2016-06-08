import { takeLatest } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import GithubSummary from 'github-summary';
import * as types from '../constants/ActionTypes';

function* request(api) {
  yield put({ type: types.FETCH_REQUEST, payload: api });
}

function* respond(api) {
  yield put({ type: types.FETCH_RESPOND, payload: api });
}

function* fetchSummary() {
  const api = 'summary';

  try {
    yield call(request, api);

    const settings = yield select(state => state.settings);
    const dates = yield select(state => state.dates);
    const params = { ...settings, ...dates };
    if (!params.formatter) delete params.formatter;

    const githubSummary = new GithubSummary(params);
    const summary = yield call([githubSummary, githubSummary.getSummary]);
    yield put({ type: types.SUMMARY_FETCH_SUCCESS, payload: summary });
    yield call(respond, api);
  } catch (err) {
    yield call(respond, api);
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

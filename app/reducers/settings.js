import { SAVE_SETTINGS, SAVE_FORMATTER } from 'constants/ActionTypes';
import GithubSummary from 'github-summary';

const initialState = {
  ...GithubSummary.defaults,
  username:        '',
  token:           '',
};

const map = {
  [SAVE_SETTINGS]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),

  [SAVE_FORMATTER]: (state, { payload }) => ({
    ...state,
    formatter: payload,
  }),
};

export default function settings(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

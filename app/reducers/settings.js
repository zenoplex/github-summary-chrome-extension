import { SAVE_SETTINGS, SAVE_FORMATTER } from 'constants/ActionTypes';

const initialState = {
  username:        '',
  token:           '',
  perPage:         100,
  requestAllPages: false,
  markdown:        true,
  formatter:       '',
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

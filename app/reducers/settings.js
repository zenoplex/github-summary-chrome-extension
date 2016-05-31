import { SAVE_SETTINGS } from '../constants/ActionTypes';

const initialState = {
  username:        '',
  token:           '',
  perPage:         100,
  requestAllPages: false,
  markdown:        true,
};

const map = {
  [SAVE_SETTINGS]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
};

export default function settings(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

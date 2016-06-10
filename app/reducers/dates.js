import { SAVE_DATE_RANGE } from 'constants/ActionTypes';

const initialState = {
  from: new Date(),
  to:   new Date(),
};

const map = {
  [SAVE_DATE_RANGE]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
};

export default function settings(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

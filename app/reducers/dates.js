import { SAVE_DATE_RANGE } from '../constants/ActionTypes';

const today = new Date();
const initialState = {
  from: today,
  to:   today,
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

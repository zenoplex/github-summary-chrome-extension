import { SAVE_DATE_RANGE } from 'constants/ActionTypes';

const today = new Date();
const yesturday = new Date();
yesturday.setDate(yesturday.getDate() - 1);

const initialState = {
  from: yesturday,
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

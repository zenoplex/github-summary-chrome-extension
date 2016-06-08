import { SUMMARY_FETCH_SUCCESS } from 'constants/ActionTypes';

const initialState = '';

const map = {
  [SUMMARY_FETCH_SUCCESS]: (state, { payload }) => payload,
};

export default function summary(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

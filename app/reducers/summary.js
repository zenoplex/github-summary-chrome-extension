import { RECEIVE_SUMMARY } from '../constants/ActionTypes';

const initialState = {
  isFetching: true,
  value: '',
};

const map = {
  [RECEIVE_SUMMARY]: (state, { payload }) => ({
    ...state,
    value: payload,
  }),
};

export default function summary(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

import {
  SUMMARY_FETCH_REQUEST, SUMMARY_FETCH_SUCCESS, SUMMARY_FETCH_FAIL,
} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  value:      '',
};

const map = {
  [SUMMARY_FETCH_REQUEST]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [SUMMARY_FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    value:      payload,
    isFetching: false,
  }),

  [SUMMARY_FETCH_FAIL]: (state) => ({
    ...state,
    value:      '',
    isFetching: false,
  }),
};

export default function summary(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

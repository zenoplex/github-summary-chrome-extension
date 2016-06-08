import { FETCH_REQUEST, FETCH_RESPOND } from '../constants/ActionTypes';

function request(state, api) {
  return ({
    ...state,
    [`${api}IsLoading`]: true,
  });
}

function respond(state, api) {
  return ({
    ...state,
    [`${api}IsLoading`]: false,
  });
}

const initialState = {};
const map = {
  [FETCH_REQUEST]: (state, { payload }) => request(state, payload),

  [FETCH_RESPOND]: (state, { payload }) => respond(state, payload),
};


export default function reduce(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

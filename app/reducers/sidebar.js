import { OPEN_SIDEBAR, CLOSE_SIDEBAR, TOGGLE_SIDEBAR } from 'constants/ActionTypes';

const initialState = {
  open: false,
};

const map = {
  [OPEN_SIDEBAR]: state => ({
    ...state,
    open: true,
  }),

  [CLOSE_SIDEBAR]: state => ({
    ...state,
    open: false,
  }),

  [TOGGLE_SIDEBAR]: state => ({
    ...state,
    open: !state.open,
  }),
};

export default function sidebar(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

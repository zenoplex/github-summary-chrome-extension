import { TOGGLE_SIDEBAR } from '../constants/ActionTypes';

const initialState = {
  open: false,
};

const map = {
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

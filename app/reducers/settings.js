const initialState = {
  username:        '',
  token:           '',
  perPage:         100,
  requestAllPages: false,
  markdown:        true,
};

const map = {};

export default function settings(state = initialState, action) {
  const reducer = map[action.type];
  if (!reducer) return state;

  return reducer(state, action);
}

export function request(state, api) {
  return ({
    ...state,
    [`${api}IsLoading`]: true,
  });
}

export function respond(state, api) {
  return ({
    ...state,
    [`${api}IsLoading`]: false,
  });
}

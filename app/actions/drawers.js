import * as types from '../constants/ActionTypes';

export function openDrawer() {
  return { type: types.OPEN_DRAWER };
}

export function closeDrawer() {
  return { type: types.CLOSE_DRAWER };
}

export function toggleDrawer() {
  return { type: types.TOGGLE_DRAWER };
}

import * as types from '../constants/ActionTypes';

export function openSidebar() {
  return { type: types.OPEN_SIDEBAR };
}

export function closeSidebar() {
  return { type: types.CLOSE_SIDEBAR };
}

export function toggleSidebar() {
  return { type: types.TOGGLE_SIDEBAR };
}

export function saveSettings() {
  return { type: types.SAVE_SETTINGS };
}

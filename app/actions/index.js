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

export function saveSettings(settings) {
  return { type: types.SAVE_SETTINGS, payload: settings };
}

export function generateSummary() {
  return { type: types.GENERATE_SUMMARY };
}

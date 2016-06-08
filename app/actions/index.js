import * as types from 'constants/ActionTypes';

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

export function saveDateRange(from, to) {
  return { type: types.SAVE_DATE_RANGE, payload: { from, to } };
}

export function saveFormatter(formatter) {
  return { type: types.SAVE_FORMATTER, payload: formatter };
}

export function generateSummary() {
  return { type: types.SUMMARY_FETCH_REQUEST };
}

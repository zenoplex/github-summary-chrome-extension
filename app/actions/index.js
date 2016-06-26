// @flow

import { reset } from 'redux-form';
import type { Action } from 'types/actions';

export function openSidebar(): Action {
  return { type: 'OPEN_SIDEBAR' };
}

export function closeSidebar(): Action {
  return { type: 'CLOSE_SIDEBAR' };
}

export function toggleSidebar(): Action {
  return { type: 'TOGGLE_SIDEBAR' };
}

export function resetSettingsForm(): Action {
  return reset('sidebar');
}

export function saveSettings(settings: Object): Action {
  return { type: 'SAVE_SETTINGS', settings };
}

export function saveDateRange(from: Date, to: Date): Action {
  return { type: 'SAVE_DATE_RANGE', from, to };
}

export function saveFormatter(formatter: string): Action {
  return { type: 'SAVE_FORMATTER', formatter };
}

export function generateSummary(): Action {
  return { type: 'SUMMARY_FETCH_REQUEST' };
}

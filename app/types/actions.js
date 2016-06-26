// @flow
/* eslint-disable no-use-before-define */

export type Action =
    { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SAVE_SETTINGS', settings: Object }
  | { type: 'SAVE_DATE_RANGE', from: Date, to: Date }
  | { type: 'SAVE_FORMATTER', formatter: string }
  | { type: 'SUMMARY_FETCH_REQUEST' }
  ;

export type Dispatch = (action:Action | PromiseAction) => any;
export type PromiseAction = Promise<Action>;

import {
  SELECT_KEY_INDEX,
  SELECT_CAPO
} from './types';

export const selectKeyIndex = payload => ({ type: SELECT_KEY_INDEX, payload });
export const selectCapo = payload => ({ type: SELECT_CAPO, payload });

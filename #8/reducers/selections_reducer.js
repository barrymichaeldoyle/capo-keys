import {
  SELECT_KEY_INDEX,
  SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
  selectedKeyIndex: 0,
  selectedCapo: 7
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_KEY_INDEX: {
      return {
        ...state,
        selectedKeyIndex: action.payload
      };
    }
    case SELECT_CAPO: {
      return {
        ...state,
        selectedCapo: action.payload
      };
    }
    default:
      return state;
  }
};

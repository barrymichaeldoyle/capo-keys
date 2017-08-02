import {
  SELECT_KEY_INDEX,
  SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
  selectedKeyIndex: 0,
  selectedCapo: 7,
  capoKeyIndex: 7
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_KEY_INDEX: {
      let capoKeyIndex = state.selectedCapo + action.payload;
      capoKeyIndex = capoKeyIndex >= 12 ? capoKeyIndex - 12 : capoKeyIndex;

      return {
        ...state,
        selectedKeyIndex: action.payload,
        capoKeyIndex
      };
    }
    case SELECT_CAPO: {
      let capoKeyIndex = state.selectedKeyIndex + action.payload;
      capoKeyIndex = capoKeyIndex >= 12 ? capoKeyIndex - 12 : capoKeyIndex;

      return {
        ...state,
        selectedCapo: action.payload,
        capoKeyIndex
      };
    }
    default:
      return state;
  }
};

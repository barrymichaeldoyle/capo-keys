import {
  OPEN_CHORDS_MODAL
} from '../actions/types';

const INITIAL_STATE = {
  chordsModalIsOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CHORDS_MODAL:
      console.log(action.payload);
      return { chordsModalIsOpen: action.payload };
    default:
      return state;
  }
};

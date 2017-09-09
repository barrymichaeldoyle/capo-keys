import {
  OPEN_CHORDS_MODAL,
  CLOSE_CHORDS_MODAL
} from './types';

export const openChordsModal = () => {
  console.log('Chords Modal Button clicked');
  return {
    type: OPEN_CHORDS_MODAL,
    payload: true
  };
};

export const closeChordsModal = () => ({
  type: CLOSE_CHORDS_MODAL,
  payload: false
});

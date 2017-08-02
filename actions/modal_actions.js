import { FacebookAds } from 'expo';

import {
  OPEN_CHORDS_MODAL,
  CLOSE_CHORDS_MODAL
} from './types';

export const openChordsModal = () => ({
  type: OPEN_CHORDS_MODAL,
  payload: true
});

export const closeChordsModal = () => {
  FacebookAds.InterstitialAdManager.showAd('328225604270934_328677554225739')
    .then(console.log('Banner ad clicked'))
    .catch(err => console.log('Interstitial Ad Error', err));
  return { type: CLOSE_CHORDS_MODAL, payload: false };
};

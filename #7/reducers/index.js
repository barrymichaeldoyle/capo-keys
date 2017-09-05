import { combineReducers } from 'redux';
import keys from './keys_reducer';
import selectedValues from './selections_reducer';

export default combineReducers({
  keys, selectedValues
});

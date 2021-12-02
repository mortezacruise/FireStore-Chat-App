import {INITIAL_STATE} from './InitialState';
import {createReducer} from 'reduxsauce';
import {StartupTypes} from './Actions';

export const startup = state => ({
  ...state,
});

export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.INITIATE_APP]: startup,
});

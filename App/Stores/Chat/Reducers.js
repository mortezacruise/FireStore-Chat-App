import {INITIAL_STATE} from './InitialState';
import {createReducer} from 'reduxsauce';
import {ChatTypes} from './Actions';

export const setRooms = (state, {rooms}) => ({
  ...state,
  rooms,
});

export const reducer = createReducer(INITIAL_STATE, {
  [ChatTypes.SET_ROOMS]: setRooms,
});

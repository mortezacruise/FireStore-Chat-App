import {
  put,
  takeLatest,
  delay,
  call,
  take,
  fork,
  cancel,
  select,
  race,
  all,
} from '@redux-saga/core/effects';

import StartupActions, {StartupTypes} from './Actions';
import {navigateAndReset} from '../../Services/NavigationService';
import Strings from '../../Values/Strings';
const {CHAT_SCREEN} = Strings.Routes;

function* startUpSaga(data) {
  console.log('START UP SAGA', data);

  try {
    yield delay(1500);
    navigateAndReset(CHAT_SCREEN);
  } catch (error) {
    console.log('ERROR IN STARTUP', error);
  }
}

export default function* () {
  yield all([takeLatest(StartupTypes.INITIATE_APP, startUpSaga)]);
}

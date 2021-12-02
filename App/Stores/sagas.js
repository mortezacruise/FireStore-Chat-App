import {takeLatest, all, fork} from 'redux-saga/effects';

import StartupSaga from '../Stores/Startup/Startup.saga';
import ChatSaga from './Chat/Chat.saga';

export default function* root() {
  yield all([fork(StartupSaga), fork(ChatSaga)]);
}

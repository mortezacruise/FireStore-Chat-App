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

import ChatActions, {ChatTypes} from './Actions';
import Strings from '../../Values/Strings';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
function* createRoomSaga(data) {
  console.log('CREATE CHAT SAGA', data);

  try {
    createChat();
    yield delay(1500);
    yield put(ChatActions.getRooms());
  } catch (error) {
    console.log('ERROR IN CREATE CHAT', error);
  }
}
function* getRoomsSaga(data) {
  console.log('CREATE CHAT SAGA', data);

  try {
    const chats = yield getChats();
    console.log({chats});
    yield put(ChatActions.setRooms(chats.reverse()));
  } catch (error) {
    console.log('ERROR IN CREATE CHAT', error);
  }
}
function* sendMessageSaga(data) {
  console.log('SEND MESSAGE SAGA', data);

  try {
    const {id, text} = data;
    addMessage(id, text);
  } catch (error) {
    console.log('ERROR IN CREATE CHAT', error);
  }
}
function* deleteStoreSaga(data) {
  console.log('CREATE CHAT SAGA', data);

  try {
    deleteStore();
  } catch (error) {
    console.log('ERROR IN CREATE CHAT', error);
  }
}

export default function* () {
  yield all([
    takeLatest(ChatTypes.CREATE_ROOM, createRoomSaga),
    takeLatest(ChatTypes.GET_ROOMS, getRoomsSaga),
    takeLatest(ChatTypes.SEND_MESSAGES, sendMessageSaga),
    // takeLatest(ChatTypes.DELETE_STORE, deleteStoreSaga)-,
  ]);
}

//============================HELPERS==========================
async function createChat() {
  const timestamp = new Date().getTime();
  const now = moment(timestamp).format('ddd, hh:mm');
  const userDocuments = firestore()
    .collection('Chats')
    .add({chatName: now, id: timestamp})
    .then(() => {
      return console.log('chat created');
    })
    .catch(err => {
      return console.log('chat not created', err);
    });
  return userDocuments;
}

async function getChats() {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Chats')
      .orderBy('id')
      .onSnapshot(querySnapshot => {
        console.log({querySnapshot});
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            id: documentSnapshot.id,
            name: '',
            latestMessage: {text: ''},
            ...documentSnapshot.data(),
          };
        });
        resolve(threads);
      });
  });
}
async function addMessage(id, text) {
  const now = new Date().getTime();
  firestore()
    .collection('Chats')
    .doc(id.toString())
    .collection('MESSAGES')
    .add({
      text,
      createdAt: now,
      id,
    });
}
async function deleteStore() {
  firestore()
    .collection('Chats')
    .delete()
    .then(() => {
      console.log('User deleted!');
    });
}

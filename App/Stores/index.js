import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from './sagas';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import {reducer as StartupReducer} from './Startup/Reducers';
import {reducer as ChatReducer} from './Chat/Reducers';

const startupConfig = {
  key: 'startup',
  storage: storage,
  blacklist: [],
};

export default () => {
  const rootReducer = combineReducers({
    startup: persistReducer(startupConfig, StartupReducer),
    chat: ChatReducer,
  });

  return configureStore(rootReducer, rootSaga);
};

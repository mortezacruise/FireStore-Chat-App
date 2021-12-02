import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore, createTransform} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import storage from '@react-native-community/async-storage';
import JSOG from 'jsog';

export const JSOGTransform = createTransform(
  (inboundState, key) => JSOG.encode(inboundState),
  (outboundState, key) => JSOG.decode(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['startUp', 'socket', 'asset', 'order'],
  transforms: [JSOGTransform],
};

export default (rootReducer, rootSaga) => {
  console.log({rootReducer, rootSaga});

  const middleware = [];
  const enhancers = [];

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};

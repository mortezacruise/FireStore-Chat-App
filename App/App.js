import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from '../App/Stores';
import AppNavigator from './Navigators/AppNavigator';

export const {store, persistor} = createStore();

export const resetStores = () => store.dispatch({type: 'RESET_ACTION'});
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;

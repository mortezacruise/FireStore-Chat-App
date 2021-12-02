import React, {useEffect} from 'react';
import {navigationRef, isReadyRef} from '../Services/NavigationService';
import {MainStack} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const AppNavigator = () => {
  useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      onStateChange={state => {
        console.log('STATE', state);
      }}>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;

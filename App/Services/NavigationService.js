import React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {StackActions} from '@react-navigation/routers';
import {Keyboard} from 'react-native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const toggleDrawer = () => {
  navigationRef?.current.dispatch(DrawerActions.toggleDrawer());
  Keyboard.dismiss();
};

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const navigateAndReset = route => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef?.current?.reset({
      index: 0,
      routes: [{name: route}],
    });
  }
};

export const push = (name, params) => {
  navigationRef.current &&
    navigationRef?.current?.dispatch(StackActions.push(name, params));
};

export const pop = value => {
  navigationRef.current &&
    navigationRef?.current?.dispatch(StackActions.pop(value));
};

export const popToTop = () => {
  navigationRef.current &&
    navigationRef?.current?.dispatch(StackActions.popToTop());
};

export const goBack = () => {
  setTimeout(() => {
    navigationRef.current?.goBack();
  }, 0);
};

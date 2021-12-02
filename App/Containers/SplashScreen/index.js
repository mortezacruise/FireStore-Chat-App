import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import Container from '../../Components/Container';
import StartupActions from '../../Stores/Startup/Actions';
import Colors from '../../Values/Colors';
const SplashScreen = () => {
  //============================CONSTANTS==========================

  const dispatch = useDispatch();
  //============================CONSTANTS==========================
  //============================EFFECTS==========================
  useEffect(() => {
    dispatch(StartupActions.initiateApp());
  }, []);
  //============================EFFECTS==========================
  return (
    <Container center>
      <Text style={{color: Colors.textColor}}>SplashScreen</Text>
    </Container>
  );
};
export default SplashScreen;

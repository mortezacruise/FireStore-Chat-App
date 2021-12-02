import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Loading from '../../Components/Loading';
import styles from './styles';

const Container = ({navigation, children, center}) => {
  //============================STATE==========================
  const [loading, setLoading] = useState(true);

  //============================STATE==========================

  //============================EFFECTS==========================
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);
  //============================EFFECTS==========================

  return (
    <SafeAreaView style={[styles.container, center && styles.alignCenter]}>
      <StatusBar barStyle={'light-content'} />
      {loading ? <Loading /> : children}
    </SafeAreaView>
  );
};

export default Container;

import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../Values/Colors';
import {goBack} from '../../Services/NavigationService';

const Header = ({title, route}) => {
  return (
    <View style={styles.header}>
      {route && (
        <TouchableOpacity style={styles.routeWrapper} onPress={goBack}>
          <Icon name={'chevron-left'} color={Colors.secondaryColor} size={20} />
          <Text style={styles.historyText}>{route}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default Header;

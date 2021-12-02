import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Colors from '../../Values/Colors';
const Separator = () => {
  return (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: Colors.borderColor,
        // marginHorizontal: 10,
      }}
    />
  );
};
export default Separator;

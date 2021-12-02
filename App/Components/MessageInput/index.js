import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Values/Colors';
import styles from './styles';
const MessageInput = ({item, onSendPress}) => {
  //============================STATES==========================

  const [text, setText] = useState('');
  //============================STATES==========================

  const onChangeText = text => {
    setText(text);
  };

  const callback = () => {
    setText('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          //   ref={inputRef}
          style={styles.textInput}
          placeholder={'Type Here'}
          placeholderTextColor={Colors.textColor}
          value={text}
          {...{onChangeText}}
        />
        <TouchableOpacity onPress={onSendPress.bind(null, text, callback)}>
          <Icon name={'send'} color={Colors.secondaryColor} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MessageInput;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import MessageInput from '../../Components/MessageInput';
import firestore from '@react-native-firebase/firestore';
import ChatActions from '../../Stores/Chat/Actions';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Colors from '../../Values/Colors';

// const HEADER_TITLE = 'Start New Chat';

const MessagesScreen = ({route}) => {
  console.log({route});
  const isIos = Platform.OS === 'ios';
  //============================CONSTANTS==========================
  const dispatch = useDispatch();
  const {history, item} = route.params;
  const [messages, setMessages] = useState([]);
  //============================CONSTANTS==========================
  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('Chats')
      .doc(item.id.toString())
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot?.(querySnapshot => {
        console.log({querySnapshot});
        const messages = querySnapshot?.docs
          ?.map?.(doc => {
            const firebaseData = doc.data();

            const data = {
              id: doc.id,
              text: '',
              createdAt: new Date().getTime(),
              ...firebaseData,
            };

            return data;
          })
          .reverse();
        console.log({messages});
        setMessages(messages);
      });

    return () => unsubscribeListener();
  }, []);

  const onSendPress = (text, cl) => {
    dispatch(ChatActions.sendMessages(item.id, text));
    cl?.();
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.bubble}>
        <View style={styles.iconWrapper}>
          <Icon name={'user'} size={22} />
        </View>
        <View style={styles.messageWrapper}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <Header {...{title: item?.chatName, route: history}} />
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        {...{renderItem}}
      />
      <KeyboardAvoidingView behavior={isIos ? 'position' : undefined}>
        <MessageInput {...{item, onSendPress}} />
      </KeyboardAvoidingView>
    </Container>
  );
};
export default MessagesScreen;

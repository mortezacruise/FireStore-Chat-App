import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../Components/Container';
import Separator from '../../Components/Seprator';
import ChatActions from '../../Stores/Chat/Actions';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../Values/Colors';
import Header from '../../Components/Header';
import Strings from '../../Values/Strings';
import {navigate} from '../../Services/NavigationService';

const HEADER_TEXT = 'Start New Chat';
const {MESSAGES_SCREEN} = Strings.Routes;
const ChatsScreen = () => {
  //============================CONSTANTS==========================
  const dispatch = useDispatch();
  //============================CONSTANTS==========================

  //============================STATES==========================
  const rooms = useSelector(state => state?.chat?.rooms) || [];
  //============================STATES==========================
  //============================EFFECTS==========================
  useEffect(() => {
    dispatch(ChatActions.getRooms());
  }, []);
  //============================EFFECTS==========================
  const onAddChat = () => {
    dispatch(ChatActions.createRoom());
  };

  const goToRoom = item => {
    console.log({item});
    navigate(MESSAGES_SCREEN, {item, history: 'Chats'});
  };
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.row} onPress={goToRoom.bind(null, item)}>
      <View style={styles.leftItems}>
        <Icon name={'chat'} color={Colors.textColor} size={30} />
        <Text style={styles.nameText}>{item.chatName}</Text>
      </View>
      <Icon name={'chevron-small-right'} color={Colors.textColor} size={25} />
    </TouchableOpacity>
  );
  return (
    <Container>
      <Header title={'Chats'} />
      <TouchableOpacity
        style={[styles.row, {justifyContent: 'flex-start'}]}
        onPress={onAddChat}>
        <View style={styles.circle}>
          <Icon name={'plus'} color={Colors.textColor} size={25} />
        </View>
        <Text style={styles.nameText}>{HEADER_TEXT}</Text>
      </TouchableOpacity>
      <FlatList
        data={rooms}
        keyExtractor={item => item.id.toString()}
        {...{renderItem}}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};
export default ChatsScreen;

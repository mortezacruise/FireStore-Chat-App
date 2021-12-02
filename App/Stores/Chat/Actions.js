import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  createRoom: null,
  getRooms: null,
  setRooms: ['rooms'],
  sendMessages: ['id', 'text'],
  setMessages: ['messages'],
});

export const ChatTypes = Types;
export default Creators;

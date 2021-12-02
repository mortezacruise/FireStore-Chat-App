import {StyleSheet} from 'react-native';
import Colors from '../../Values/Colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.rowColor,
    padding: 10,
  },
  textInput: {
    width: '90%',
    color: Colors.textColor,
    height: 48,
  },
  inputWrapper: {
    backgroundColor: Colors.mainColor,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

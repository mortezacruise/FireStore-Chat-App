import {StyleSheet} from 'react-native';
import Colors from '../../Values/Colors';

export default styles = StyleSheet.create({
  container: {},
  text: {},
  bubble: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  iconWrapper: {
    backgroundColor: Colors.grayBackground,
    padding: 5,
    borderRadius: 100,
    marginHorizontal: 15,
  },
  messageWrapper: {
    backgroundColor: Colors.textColor,
    marginStart: 8,
    paddingHorizontal: 10,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 4,
  },
});

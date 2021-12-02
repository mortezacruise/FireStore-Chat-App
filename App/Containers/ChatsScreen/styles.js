import {StyleSheet} from 'react-native';
import Colors from '../../Values/Colors';
export default styles = StyleSheet.create({
  container: {},
  row: {
    backgroundColor: Colors.rowColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    // marginHorizontal: 10,
  },
  leftItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    color: Colors.textColor,
    marginStart: 15,
  },
  circle: {
    borderWidth: 2,
    borderColor: Colors.textColor,
    borderRadius: 100,
    padding: 2,
  },
});

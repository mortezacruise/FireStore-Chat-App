import {StyleSheet} from 'react-native';
import Colors from '../../Values/Colors';

export default styles = StyleSheet.create({
  container: {},
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    height: 60,
  },
  title: {
    color: Colors.textColor,
    fontWeight: 'bold',
    fontSize: 14,
  },
  routeWrapper: {
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    height: 60,
    // backgroundColor: 'red',
    flexGrow: 1,
    flexBasis: 1,
    justifyContent: 'center',
    paddingStart: 15,
    flexDirection: 'row',
  },

  historyText: {
    color: Colors.secondaryColor,
  },
});

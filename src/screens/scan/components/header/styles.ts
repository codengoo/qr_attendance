import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  app_name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
  },
});

export default styles;

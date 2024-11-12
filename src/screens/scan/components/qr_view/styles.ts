import {Colors} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  textInstruction: {
    fontSize: 14,
    color: Colors.primary,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;

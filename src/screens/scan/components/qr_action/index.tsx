import {BtnIcon, Icon} from '@components';
import {Colors} from '@constants';
import {View} from 'react-native';
import styles from './styles';

export default function QRAction() {
  return (
    <View style={styles.container}>
      <BtnIcon icon={Icon.Bolt} size="sm" color={Colors.primary} />
    </View>
  );
}

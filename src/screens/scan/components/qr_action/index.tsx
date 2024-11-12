import {View} from 'react-native';
import {BtnIcon} from '../../../../components';
import {Icon} from '../../../../components';
import styles from './styles';
import {Colors} from '../../../../constants';

export default function QRAction() {
  return (
    <View style={styles.container}>
      <BtnIcon icon={Icon.Bolt} size="sm" color={Colors.primary} />
    </View>
  );
}

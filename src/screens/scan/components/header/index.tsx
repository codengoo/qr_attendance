import {Text, View} from 'react-native';
import {Icon} from '../../../../components';
import styles from './styles';
import {Colors} from '../../../../constants';
import {BtnIcon} from '../../../../components';

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon.App color={Colors.primary} />
      <Text style={styles.app_name}>VNUATE</Text>
      <BtnIcon icon={Icon.Plus} />
    </View>
  );
}

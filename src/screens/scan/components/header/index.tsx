import {BtnIcon, Icon} from '@components';
import {Colors} from '@constants';
import {Text, View} from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon.App color={Colors.primary} />
      <Text style={styles.app_name}>VNUATE</Text>
      <BtnIcon icon={Icon.Plus} />
    </View>
  );
}

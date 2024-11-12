import {View} from 'react-native';
import styles from './styles';
import Header from './components/header';
import QRView from './components/qr_view';
import QRAction from './components/qr_action';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <QRView />
      <QRAction />
    </View>
  );
}

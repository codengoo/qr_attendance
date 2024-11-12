import {View} from 'react-native';
import Header from './components/header';
import QRAction from './components/qr_action';
import QRView from './components/qr_view';
import styles from './styles';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <QRView />
      <QRAction />
    </View>
  );
}

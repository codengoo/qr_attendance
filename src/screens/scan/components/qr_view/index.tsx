import {Text, View} from 'react-native';
import QRScan from '../qr_scan';
import styles from './styles';

export default function QRView() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInstruction}>Scan QR code to attend session</Text>
      <QRScan></QRScan>
    </View>
  );
}

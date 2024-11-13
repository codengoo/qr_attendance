import {StyleSheet, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import styles from './styles';

export default function QRScan() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} 
  = useCameraPermission();

  if (!hasPermission) {
    requestPermission();
  }

  if (device == null) {
    console.log('No stream');
  } else {
    console.log(device.hasFlash);
  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
      console.log(codes);
    },
  });

  return (
    <View style={styles.container}>
      {!hasPermission || !device ? (
        <View></View>
      ) : (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device!}
          isActive={true}
          codeScanner={codeScanner}
          // torch="off"
        />
      )}
    </View>
  );
}

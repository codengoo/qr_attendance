import {Image, StatusBar, View} from 'react-native';
import ScanScreen from './src/screens/scan';

export default function App() {
  return (
    <View style={{position: 'absolute', width: '100%', height: '100%'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Image
        source={require('./src/assets/images/bg.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <ScanScreen />
    </View>
  );
}

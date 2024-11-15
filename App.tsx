import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, View} from 'react-native';
import ScanScreen from './src/screens/scan';

export default function App() {
  const HomeTabs = createBottomTabNavigator({
    screenOptions: {
      headerShown: false,
    },
    screens: {
      Feed: ScanScreen,
    },
  });

  const RootStack = createNativeStackNavigator({
    screenOptions: {
      headerShown: false,
    },
    screens: {
      Home: HomeTabs,
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return (
    <View style={{position: 'absolute', width: '100%', height: '100%'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      {/* <Image
        source={require('./src/assets/images/bg.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      /> */}

      <Navigation />
    </View>
  );
}

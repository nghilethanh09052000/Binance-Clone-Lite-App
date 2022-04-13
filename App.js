import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import Tabs from './src/navigation/tab';
import CameraOpen from './src/screen/Camera';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      initialRouteName={'Home'}

      >
          <Stack.Screen
            name='Tabs'
            component={Tabs}
          />
          <Stack.Screen
            name='Camera'
            component={CameraOpen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



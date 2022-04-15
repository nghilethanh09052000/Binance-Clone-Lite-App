import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';

//Screen
import Tabs from './src/navigation/tab';
import Login from './src/screen/Login';
import CoinsDetails from './src/screen/CoinsDetails';

//Components
import Header from './src/components/Home/Header';

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
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='CoinsDetails'
            component={CoinsDetails}
            options={
                    ({ route }) => ({
                        title: route.params.name,
                        headerShown:true 
                    })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



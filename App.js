import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTab from './src/shared/bottom-tabs/BottomTab';
import DetailsScreen from './src/screens/details/DetailsScreen';
import ShowRoomScreen from './src/screens/all-top-hotel/ShowRoomScreen';
import Welcome from './src/screens/adv/Welcome';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='Welcome'>
        <Stack.Screen options={{ headerShown: false }} name='Welcome' component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={BottomTab} />
        <Stack.Screen name='Top Hotels' component={ShowRoomScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Sign up' component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name='DetailsScreen' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

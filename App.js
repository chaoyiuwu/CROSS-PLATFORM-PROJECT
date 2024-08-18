import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LandingPage from './pages/LandingPage';
import LoggedInMainPage from './screens/LoggedInMainPage';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Landing">
      <MainStack.Screen
        name="Landing"
        component={LandingPage}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerLeft: () => null, 
          gestureEnabled: false, 
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="LoggedIn"
        component={LoggedInMainPage}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <MainStack.Screen
       name="ForgotPassword"
       component={ForgotPasswordScreen}
       options={{
         title: 'Forgot Password?',  
        headerShown: true,  
  }}
/>
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import LandingPage from './pages/LandingPage'
import LoggedInMainPage from './screens/LoggedInMainPage'

const MainStack = createNativeStackNavigator()
function MainStackScreen(){
  return(
    <MainStack.Navigator
        initialRouteName="Landing"
        defaultNavigationOptions = {{
        }}>
        <MainStack.Screen name='Landing' component={LandingPage} 
        options= {{
            headerTitleAlign: 'center'
        }}/>
        <MainStack.Screen name='Register' component={RegisterScreen}
        options= {{
        }}/>
        <MainStack.Screen name='Login' component={LoginScreen}
        options= {{
        }}/>
        <MainStack.Screen name='LoggedIn' component={LoggedInMainPage} options={{title: 'Home', headerShown: false}}/>
  </MainStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <MainStackScreen/>
    </NavigationContainer>
  );
}
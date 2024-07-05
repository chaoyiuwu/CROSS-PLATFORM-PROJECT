import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'
import InventoryPage from './pages/InventoryPage'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const Tab = createBottomTabNavigator()

const ListStack = createNativeStackNavigator()
function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name='List' component={ListPage} options={{title: 'Cocktail Recipes'}} />
      <ListStack.Screen name='Detail' component={DetailPage} />
    </ListStack.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomePage' component={HomePage} options={{title: 'Home'}}/>
      <HomeStack.Screen name='Login' component={LoginScreen} />
      <HomeStack.Screen name='Register' component={RegisterScreen} />
    </HomeStack.Navigator>
  )
}

const InventoryStack = createNativeStackNavigator()
function InventoryStackScreen() {
  return (
    <InventoryStack.Navigator>
      <InventoryStack.Screen name='Item Categories' component={InventoryPage} />
    </InventoryStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Inventory':
                iconName = focused? 'cube' : 'cube-outline';
                break;
              case 'Discovery':
                iconName = focused ? 'grid' : 'grid-outline';
                break;
              default:
                iconName = focused ? 'square' : 'square-outline';
                break;
            }

            // return any component here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Inventory" component={InventoryStackScreen} />
        <Tab.Screen name="Discovery" component={ListStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
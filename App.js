import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'

const Tab = createBottomTabNavigator()

const ListStack = createNativeStackNavigator()
function ListStackScreen() {
    return (
        <ListStack.Navigator>
            <ListStack.Screen name='Cocktail Recipes' component={ListPage}/>
            <ListStack.Screen name= 'Detail' component={DetailPage}/>
        </ListStack.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Discovery') {
                iconName = focused ? 'grid' : 'grid-outline'
              }
  
              // return any component here
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}

      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Discovery" component={ListStackScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

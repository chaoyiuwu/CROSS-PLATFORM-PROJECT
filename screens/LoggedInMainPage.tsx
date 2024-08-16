import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import InventoryPage from "../pages/InventoryPage";
import DetailPage from "../pages/DetailPage";
import CategoryDetailPage from "../pages/CategoryDetailPage";

const Tab = createBottomTabNavigator()


const ListStack = createNativeStackNavigator()
function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name='List' component={ListPage} options={{ title: 'Cocktail Recipes' }} />
      <ListStack.Screen name='Detail' component={DetailPage} />
    </ListStack.Navigator>
  )
}

const InventoryStack = createNativeStackNavigator()
function InventoryStackScreen() {
  return (
    <InventoryStack.Navigator>
      <InventoryStack.Screen name='Categories' component={InventoryPage} />
      <InventoryStack.Screen name='CategoryDetail' component={CategoryDetailPage} />
    </InventoryStack.Navigator>
  )
}
const LoggedInMainPage = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'Inventory':
            iconName = focused ? 'cube' : 'cube-outline';
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
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Inventory" component={InventoryStackScreen} />
      <Tab.Screen name="Discovery" component={ListStackScreen} />
    </Tab.Navigator>
  )
}

export default LoggedInMainPage
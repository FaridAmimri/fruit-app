/** @format */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LogBox } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator()

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name='Product'
          options={{ headerShown: false }}
          component={ProductScreen}
        />
        <Stack.Screen
          name='Cart'
          options={{ headerShown: false }}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

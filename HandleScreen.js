import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailMusic from './screens/DetailMusic/DetailMusic'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HandleScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Details" component={DetailMusic} />
      </Stack.Navigator>
  )
}

export default HandleScreen

const styles = StyleSheet.create({})
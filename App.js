import React from "react";
import {
  StyleSheet, 
  SafeAreaView, 
  View,
  Text,Button,
} from "react-native"; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SleepScreen from "./screens/SleepScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ComposerScreen from "./screens/ComposerScreen";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailMusic from './screens/DetailMusic/DetailMusic'
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //     <SleepScreen /> 
    // </SafeAreaView>
     <NavigationContainer> 
    
     <Tab.Navigator screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#4870FF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarShadowVisible: false,
        // Floating Tab Bar...
        tabBarStyle: {
          backgroundColor: "rgba(33, 40, 63, 1)",
          position: "relative",
          bottom: 0,
          marginHorizontal: 0,
          // Max Height...
          height: 60,
          // Shadow...
          shadowColor: "red",
          borderBottomWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          padding: 0,
          paddingBottom: 10,
        },
      }}>
       <Tab.Screen name="Discover" component={SleepScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 10,
              }}
            >
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "#4870FF" : "#8E8E93"}
              ></FontAwesome5>
            </View>
          ),
        }} />
       <Tab.Screen name="Composer" component={ComposerScreen} 
       options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              // centring Tab Button...
              position: "absolute",
              top: 10,
            }}
          >
            <FontAwesome
              name="music"
              size={20}
              color={focused ? "#4870FF" : "#8E8E93"}
            ></FontAwesome>
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              // centring Tab Button...
              position: "absolute",
              top: 10,
            }}
          >
            <FontAwesome
              name="user"
              size={20}
              color={focused ? "#4870FF" : "#8E8E93"}
            ></FontAwesome>
          </View>
        ),
      }}/>
     </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090E18",
  },
});

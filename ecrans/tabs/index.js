
import React from 'react';
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../home';
import Message from '../messages';
import Settings from '../settings';
import Domaine from '../domaine';
import WelcomeScreen from '../../screens/WelcomeScreen';

const BottomTabs = ()=>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShown: false
          }}
        >
          <Tab.Screen 
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Accueil',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='home'  color={color} size={size} />
              ),
            }}
          />
          
           <Tab.Screen 
            name="Domaine"
            component={Domaine}
            options={{
              tabBarLabel: 'Utilisateur',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='account'  color={color} size={size} />
              ),
            }}
          />
         
         <Tab.Screen 
            name="Message"
            component={Message}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name='message'  color={color} size={size} />
              ),
            }}
          />
         
         <Tab.Screen 
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Parametre',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='account'  color={color} size={size} />
              ),
            }}
          />
         
        </Tab.Navigator>
      );
};

export default BottomTabs;

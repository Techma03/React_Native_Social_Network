import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../ecrans/tabs';
import Home from '../ecrans/home';
import Conversation from '../ecrans/conversation/conversation';
import Users from '../ecrans/users';
import Uprofil from '../ecrans/uProfil';
import HomeScreen from '../screens/HomeScreen';

import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Routes = ()=>{
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={LoginScreen} />
            <Stack.Screen name="Signup"  component={Signup} options={{headerShown: false}} />
            <Stack.Screen name="home" component={HomeScreen} />
         
            <Stack.Screen name="conversation"  component={Conversation} options={{headerShown: true}} />
            <Stack.Screen name="utilisateur"  component={Users} options={{headerShown: true}} />
            <Stack.Screen name="Uprofil"  component={Uprofil} options={{headerShown: true}} />
            </Stack.Navigator>
       </NavigationContainer>
    );
};

export default Routes;



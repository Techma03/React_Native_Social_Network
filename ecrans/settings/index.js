import React from 'react';
import { View, Text, FlatList,StyleSheet,Image } from "react-native";
import { FackeProfil } from '../../fakeData/fackeProfil';
import SettingsList from '../../composantes/ActivityItem/SettingsList';
import set from './style';

const  Settings = ()=>{
    return (
        <View style={set.container}>
        <View style={set.header} >
           
            <Image style={set.img}  source={require('../../assets/doctor.jpg')} />
            <View style={set.info}>
                <Text style={set.name} >John Kakule</Text>
                <Text style={set.email} >john@gmail.com</Text>
                <Text style={set.phone} >+243 98 944 333</Text> 
            </View>
        </View>
    
         <FlatList 
         data = {FackeProfil}
         style ={set.Fack}
         showsVerticalScrollIndicator={false}
         keyExtractor = {item => item.id}
         renderItem = {({item}) => {
            return <SettingsList item={item} />;
         }}
         />
             
        </View>
    );
};

export default Settings;

import { View,Text,Image, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import setS from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingsList = ({item}) => {
  return (

   
       <TouchableOpacity style={setS.container}>
         
    <Text>{item.libelle}</Text>
    <AntDesign name='arrowright' size={20} style={setS.icon}/>
    </TouchableOpacity>
  
   
    
  )
}

export default SettingsList;
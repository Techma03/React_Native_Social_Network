import { View,Text,Image, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import setD from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DomaineList = ({item,navigation}) => {
  return (

   
       <TouchableOpacity style={setD.container} onPress={()=> navigation.navigate('utilisateur',{item})}>
    <Image style={setD.img}  source={require('./img/2.jpg')} />   
    <Text style={setD.domaine}>{item.libelle}</Text>
    <AntDesign name='arrowright' size={20} style={setD.icon}/>
    </TouchableOpacity>
  
   
    
  )
}

export default DomaineList;
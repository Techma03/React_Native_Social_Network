import { View, Text,Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import User from './style';


const UserList = ({item,navigation}) => {
  return (
    <TouchableOpacity style={User.msgcontainer} onPress={()=> navigation.navigate('Uprofil',{item})}>
      <Image  source={require('./../../assets/u.png')} style={User.msgImg}/>
     
     <View style={User.Msginfo}>
        <View style={User.date_name}>
            <Text style={User.name}>{item.fullname}</Text>
           
        </View>
     <Text style={User.loc}>Habite à Goma</Text>
     </View>
    </TouchableOpacity>
  )
}

export default UserList;
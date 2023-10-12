import { View, Text,Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Mstyle from './style';


const MessageList = ({item,navigation}) => {
  return (
    <TouchableOpacity style={Mstyle.msgcontainer} onPress={()=> navigation.navigate('conversation',{item})}>
      <Image  source={require('./../../../assets/doctor.jpg')} style={Mstyle.msgImg}/>
     <View style={Mstyle.Msginfo}>
        <View style={Mstyle.date_name}>
            <Text style={Mstyle.name}>{item.fullname}</Text>
            <Text style={Mstyle.date}>{item.date}</Text>
        </View>
     <Text style={Mstyle.lmsg}> {item.l_msg}</Text>
     </View>
    </TouchableOpacity>
  )
}

export default MessageList;
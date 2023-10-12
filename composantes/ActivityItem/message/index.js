import { View, Text } from 'react-native'
import React from 'react'
import conv from './style';

const Message = ({item}) => {
    const isMine = () =>{
        return item.user.id === 1;
    }
  return (
    <View style={[conv.container,{
        backgroundColor: isMine()? '#DCF8C5' : 'white',
        alignSelf: isMine()? 'flex-end' : 'flex-start'
    }]}>
      <Text>{item.msg}</Text>
      <Text>{item.date}</Text>
    </View>
  )
}

export default Message;
import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InputMessage = () => {
  return (
    <View style={Input.container}>
      <TextInput style={Input.input} placeholder='Message ici...'/>
     <TouchableOpacity>
     <MaterialCommunityIcons name="send" size={24} style={Input.send}/>
     </TouchableOpacity>
    </View>
  )
}

export default InputMessage;
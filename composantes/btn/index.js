
import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';


const Buttons = () => {
  
  return (
   <TouchableOpacity style={{justifyContent:"center",width:'95%',backgroundColor:'#465bd8',height:50,
   marginBottom:30,borderRadius:10}}  onPress={this.Login}>
    <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color:'white'}}>
        Se connecter
    </Text>
   </TouchableOpacity>
  )
}

export default Buttons;
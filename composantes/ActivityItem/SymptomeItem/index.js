import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import style from './style';
const SymptomeItem = ({item}) => {
  return (
   <TouchableOpacity style={style.item}>
     <View>
      <Text>{item.libelle}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default SymptomeItem;
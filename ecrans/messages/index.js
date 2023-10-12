
import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { FackeChat } from '../../fakeData/fackeChat';
import MessageList from '../../composantes/ActivityItem/MessageList';
import Mstyle from '../../composantes/ActivityItem/MessageList/style';


const Message = ({navigation}) => {
  return (
   <FlatList 
   data = {FackeChat}
   keyExtractor = {item => item.id}
   style = {Mstyle.root}
   renderItem = {({item}) => {
      return <MessageList item={item} navigation = {navigation} />;
      
   }}
  />

  
  )
}

export default Message;
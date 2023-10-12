
import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { FackeChat } from '../../fakeData/fackeChat';
import Mstyle from '../../composantes/ActivityItem/MessageList/style';
import UserList from '../../composantes/userList';


const Message = ({navigation}) => {
  return (
   <FlatList 
   data = {FackeChat}
   keyExtractor = {item => item.id}
   style = {Mstyle.root}
   renderItem = {({item}) => {
      return <UserList item={item} navigation = {navigation}/>;
      
   }}
  />

  
  )
}

export default Message;
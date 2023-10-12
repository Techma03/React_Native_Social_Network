import { View, Text,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import { FackeMessage } from '../../fakeData/fackeMessages';
import Message from '../../composantes/ActivityItem/message';
import InputMessage from '../../composantes/ActivityItem/Input';
const Conversation = ({route, navigation}) => {
    const {item} = route.params;
    useEffect(()=>{
        navigation.setOptions({title: item.fullname});
    });
  return (
    <View style={{flex:1}}>
     <FlatList data={FackeMessage}
     keyExtractor={item => item.id}
     renderItem={({item})=>{
      return <Message item={item}/>;
    }}
     />
     <InputMessage/>
    </View>
  )
}

export default Conversation;
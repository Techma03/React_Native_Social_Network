

import React, {Component,useEffect, useState} from 'react';
import {ActivityIndicator,Item, FlatList, Text, View} from 'react-native';



const HomeScreen = ()=> {
  const[Data, setData] = useState([]);

    

  useEffect(() => {

    fetch("http://192.168.43.171/reactapi/view.php")
    .then(function(response){
      return response.json();
    }).then(function(response){
      setData(response.data);
      console.log(response)
    })
   
     
  }, []);
  const renderItem = ({item}) =>{
   <Text>{item.nom}</Text>
  };

  return (
    <View >
    <Text>kjkrjklrw</Text>
     <FlatList
     data = {Data}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     
     />
     
    </View>
  );
};
export default HomeScreen;


import React from 'react';
import { View, Text, FlatList,StyleSheet,Image } from "react-native";
import { FackeProfil } from '../../fakeData/fackeProfil';
import set from './style';
import UprofilList from '../../composantes/UprofilList';
import { FUprofil } from '../../fakeData/fUprofil';
import { TouchableOpacity } from 'react-native';


const  Uprofil = ({route, navigation})=>{
    const {item} = route.params;
    
    return (
        <View style={set.container}>
        <View style={set.header} >
           
            <Image style={set.img}  source={require('../../assets/u.png')} />
            <View style={set.info}>
                <Text style={set.name} >John Kakule</Text>
                <Text style={set.email} >john@gmail.com</Text>
                <Text style={set.phone} >+243 98 944 333</Text> 
                <Text style={set.loc} >Habite à Goma</Text> 
            </View>
        </View>
    
         <FlatList 
         data = {FUprofil}
         style ={set.Fack}
         showsVerticalScrollIndicator={false}
         keyExtractor = {item => item.id}
         renderItem = {({item}) => {
            return <UprofilList item={item} />;
         }}
         />
            <TouchableOpacity style={set.Msg}  onPress={()=> navigation.navigate('conversation',{item})}>
               <View >
               <Text style={set.btn} navigation = {navigation} >Envoyer Message</Text>   
               </View>
            </TouchableOpacity>
             
        </View>
    );
};

export default Uprofil;

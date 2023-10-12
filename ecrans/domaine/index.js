import React from 'react';
import { View, Text, FlatList,StyleSheet,Image } from "react-native";
import DomaineList from '../../composantes/domainList';
import setd from './style';
import { FackeDomaine } from '../../fakeData/fackeDomaine';

const  Domaine = ({navigation})=>{
    return (
        <View style={setd.container}>
        
    
         <FlatList 
         data = {FackeDomaine}
         style ={setd.Fack}
         showsVerticalScrollIndicator={false}
         keyExtractor = {item => item.id}
         renderItem = {({item}) => {
            return <DomaineList item={item} navigation = {navigation} />;
         }}
         />
             
        </View>
    );
};

export default Domaine;

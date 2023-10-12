import React from 'react';
import { View, Text,TouchableOpacity,Image } from "react-native";
import Styles from './style';
import dashboardStyles from '../../ecrans/home/style';


const  ActivityItem = ({item})=>{
    return (
    
        <TouchableOpacity style={Styles.scrollableListItem}>
         <Image style={Styles.img} source={(require('./../../assets/doctor.jpg'))} />
        <Text style={Styles.mainText}>{item.mainText}</Text>
        <Text style={Styles.subText}>{item.subText}</Text>
        </TouchableOpacity>
    );
};

export default ActivityItem;

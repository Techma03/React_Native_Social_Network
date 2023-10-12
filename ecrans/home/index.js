import React,{Component} from 'react';
import { View, Text,Image,FlatList } from "react-native";
import {  ScrollView, TouchableOpacity  } from 'react-native';
import './style';
import DashboardStyles from './style';
import { FackActivity } from '../../fakeData/fackeActivity';
import ActivityItem from '../../composantes/ActivityItem';
import  {FakeSymptomes} from '../../fakeData/fakeSymptomes';
import  SymptomeItem from  '../../composantes/ActivityItem/SymptomeItem';
import Styles from '../../composantes/ActivityItem/style';
import { FakeDoctor } from '../../fakeData/fackeDoctor';

export default class Home extends Component {

    render(){
        return (
            <ScrollView showsVerticalScrollIndicator={false}
           >
                
                <View style={DashboardStyles.header}>
                <Text style={DashboardStyles.logo}>Uface</Text>
                <Image style={DashboardStyles.img}  source={require('./../../assets/user.png')}/>
               
                </View>    
           
            
            <View style={DashboardStyles.doctorContainer} >
                {
                    FakeDoctor.splice(0,5).map((doctor,index)=>{
                        return (
                           <View key={doctor.id} style={DashboardStyles.doctorCard}  >
                             <View style={DashboardStyles.Header}>
                                 <Image source={require('./../../posts/user/prince.jpg')} style={DashboardStyles.UserImg}/>
                                <View style={DashboardStyles.UserInfo}>
                                    <Text style={DashboardStyles.Dname}>{doctor.fullname}</Text>
                                    <Text style={DashboardStyles.Userfonction}>{doctor.fonction}</Text>
                                   
                                </View>
                                <Text style={DashboardStyles.time}>Il y'a 5min</Text>
                             </View>
                            <Image source={require('./../../posts/post1.jpg')} style={DashboardStyles.doctorImg}/>
                            <View style={DashboardStyles.doctorInfo}>
                               
                                <View style={DashboardStyles.operation}>
                                <Text style={DashboardStyles.Dspec}>{doctor.speciality}</Text>
                                <Text style={DashboardStyles.Dspec2}>{doctor.comment}</Text>
                                <Text style={DashboardStyles.Dspec2}>{doctor.contact}</Text>
                                </View>
                            </View>
                           </View>
                        )
                        
                    })
                }
            </View>
    
            {/*Fin docteur*/}
            </ScrollView>
        );
    }
   
};



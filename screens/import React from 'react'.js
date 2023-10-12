import React from 'react'
import { View,AppRegistry, Text,StyleSheet,StatusBar,Image,TextInput,ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import Buttons from '../composantes/btn'
import inp from './style'
import { TouchableOpacity } from 'react-native'
import {StackN}

de class Signup extends Component {

  static navigationOptions={

    title:'Input Users'
  }
  render(){
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:"#fff",flexDirection:"column"}}>
       
        <View style={{flex:2,backgroundColor:"#fff",flexDirection:"column"}} >
            <View style={{flexDirection:"column",backgroundColor:"#fff"}}>
              <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:20, paddingTop:10,marginLeft:10,paddingHorizontal:88}}>
                     <Text  >Créer votre compte</Text> 
                    </Text>
                    <View style={{flexDirection:'column'}}>
                        
                    </View>
              </View>   
               
            </View>
                  <View style={{flex:2,flexDirection:"column",paddingTop:20,paddingLeft:15}}>
                     
                     <View  style={{alignItems:"center", flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                      <TextInput style={inp.input}   placeholder='Votre nom' placeholderTextColor="#818181"/>
                      
                     </View>
  
                     <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                      <TextInput style={inp.input}   placeholder='Post Nom' placeholderTextColor="#818181"/>
                      
                     </View>
                     <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Prenom' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Adresse' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Votre Email' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Date de Naissance' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Sexe' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Mot de Passe' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   placeholder='Retaper Mot de Passe' placeholderTextColor="#818181"/>
                     
                    </View>
  
                   
                     <TouchableOpacity style={{justifyContent:"center",width:'95%',backgroundColor:'#465bd8',height:50,
     marginBottom:30,borderRadius:10,marginTop:17}} onPress={()=>navigation.navigate('home')} navigation={navigation}>
      <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color:'white'}}>
       Créer maintenant
      </Text>
     </TouchableOpacity>
                      <View style={{flex:1,flexDirection:"column",justifyContent:'center',
                    mearginBottom:40, alignItems:'center',marginBottom:200}}>
                      <Text style={{fontSize:17,color:'#818181'}}>
                        Vous avez deja un compte?
                      </Text>
                      <TouchableOpacity  onPress={()=>navigation.navigate("Welcome")}>
                       <Text style={{fontSize:18,color:"#333"}}>Connectez vous</Text>
                      </TouchableOpacity>
                      </View>
  
                  </View>
        </View>
      </ScrollView>
    );
  }
  }
 

export default  CodeTR =   StackNavigator ({

  First:{screen:Signup}

});
AppRegistry.registerComponent('navigation',()=>CodeTR);
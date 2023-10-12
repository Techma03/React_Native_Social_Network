import React,{Component} from 'react'
import { View, Text,StyleSheet,StatusBar,Image,TextInput } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import Buttons from '../composantes/btn'
import inp from './style'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native'

 export default class Login extends Component{
  
  
  constructor (props){
    super(props);
    this.state={email:'',password:''}
  }
  
  Login = () =>{
    var email = this.state.email;
    var password = this.state.password;
   
    if(email.length==0 || password.length==0 ){
      alert ("Veuillez renseigner tout les champs");
    }else{
      var URL = 'http://192.168.43.171/reactapi/login.php';
      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
      var Data = {
        email:email,
        password:password,
       
       };
       fetch(URL,
         {
           method:'POST',
           headers:headers,
           body: JSON.stringify(Data)  
         }
         )
         .then((response)=>response.json())
         .then((response)=>{
           if(response=="login"){
              this.props.navigation.navigate('home');
           }else{
            alert("Email ou Password incorrect!");
           }
         })
         .catch((error)=>
         {
           alert("Error"+error);
         })
        }  
  }
  
  render(){
   
    return (
      <View style={{flex:1,backgroundColor:"#fff",flexDirection:"column"}}>
       
        <View style={{flex:2,backgroundColor:"#fff",flexDirection:"column"}} >
            <View style={{flexDirection:"column",backgroundColor:"#fff"}}>
              <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:30, paddingTop:10,marginLeft:10,paddingHorizontal:88}}>
                     <Text  >J-Connect</Text> 
                    </Text>
                    <View style={{flexDirection:'column'}}>
                        
                    </View>
              </View>
                <Text style={{paddingHorizontal:18,fontSize:14,paddingTop:10,color:"#777"}}>Bienvenu sur notre Reseau Social, rester connecter avec tous les travailleurs dans le monde</Text>
            </View>
                  <View style={{flex:2,flexDirection:"column",paddingTop:20,paddingLeft:15}}>
                     
                     <View  style={{alignItems:"center", flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     <Icon name='envelope-o' size={22} color="#818181"/>
                      <TextInput style={inp.input}   onChangeText={email=>this.setState({email})}  placeholder='Votre Email' placeholderTextColor="#818181"/>
                      
                     </View>
  
                     <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     <Icon name='lock' size={22} color="#818181"/>
                      <TextInput style={inp.input}  secureTextEntry={true} onChangeText={password=>this.setState({password})}  placeholder='Entrez Password' placeholderTextColor="#818181"/>
                      
                     </View>
  
                     <View style={{width:'90%',marginBottom:10}}>
                            <Text style={{fontSize:17,alignSelf:'flex-end',paddingTop:10}}>Mot de passe oublier?</Text>
                     </View>
  
                     <TouchableOpacity style={{justifyContent:"center",width:'95%',backgroundColor:'#465bd8',height:50,
   marginBottom:30,borderRadius:10}}  onPress={this.Login}>
    <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color:'white'}}>
        Se connecter
    </Text>
   </TouchableOpacity>
  
                      <View style={{flex:1,flexDirection:"column",justifyContent:'center',
                    mearginBottom:40, alignItems:'center',marginBottom:200}}>
                      <Text style={{fontSize:17,color:'#818181'}}>
                        Vous n'avez pas encore un compte?
                      </Text>
                      <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Signup')}>
                       <Text style={{fontSize:18,color:"#333"}}>Créer un compte</Text>
                      </TouchableOpacity>
                      </View>
  
                  </View>
        </View>
      </View>
    );
  }
 
}
  

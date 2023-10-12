import React,{Component} from 'react'
import { View, Text,StyleSheet,StatusBar,Image,TextInput,ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import Buttons from '../composantes/btn'
import inp from './style'
import { TouchableOpacity } from 'react-native'
import { Keyboard } from 'react-native'


export default class Signup extends Component{
  constructor (props){
    super(props);
    this.state={nom:'',pnom:'',prenom:'',adress:'',email:'',date:'',sexe:'',pass:'',repass:''}
  }
 
    Insert = () =>{
     
      var nom = this.state.nom;
      var pnom = this.state.pnom;
      var prenom = this.state.prenom;
      var adress = this.state.adress;
      var email = this.state.email;
      var date = this.state.date;
      var sexe = this.state.sexe;
      var pass = this.state.pass;
      var repass = this.state.repass;
      if(nom.length==0 || pnom.length==0 || prenom.length==0 || adress.length==0 || email.length==0 || date.length==0 ||
        sexe.length==0 || pass.length==0 || repass.length==0  ){
        alert ("Veuillez renseigner tout les champs");
      }else{
        var URL = 'http://192.168.43.171/reactapi/insert.php';
        var headers = {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        };
        var Data = {
         nom:nom,
         postnom:pnom,
         prenom:prenom,
         adress:adress,
         email:email,
         date_naissance:date,
         sexe:sexe,
         password:pass,
         confirmer_pass:repass

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
           if(response=="signup"){
              alert("Création du compte Réussi!");
              this.props.navigation.navigate("Welcome");
           }else{
            alert(response);
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
                     
                      <TextInput style={inp.input}   onChangeText={nom=>this.setState({nom})}   placeholder='Votre nom' placeholderTextColor="#818181"/>
                      
                     </View>
  
                     <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                      <TextInput style={inp.input}  onChangeText={pnom=>this.setState({pnom})}    placeholder='Post Nom' placeholderTextColor="#818181"/>
                      
                     </View>
                     <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   onChangeText={prenom=>this.setState({prenom})}  placeholder='Prenom' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}  onChangeText={adress=>this.setState({adress})}  placeholder='Adresse' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   onChangeText={email=>this.setState({email})}  placeholder='Votre Email' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   onChangeText={date=>this.setState({date})}  placeholder='Date de Naissance' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}  onChangeText={sexe=>this.setState({sexe})}   placeholder='Sexe' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input} onChangeText={pass=>this.setState({pass})} secureTextEntry={true}   placeholder='Mot de Passe' placeholderTextColor="#818181"/>
                     
                    </View>
                    <View  style={{alignItems:"center",marginTop:20, flexDirection:"row", elevation:1,justifyContent:"center",borderRadius:10,width:"95%",paddingLeft:20,height:60,backgroundColor:"#ededed"}}>
                     
                     <TextInput style={inp.input}   onChangeText={repass=>this.setState({repass})} 
                     
                     placeholder='Retaper Mot de Passe' secureTextEntry={true} placeholderTextColor="#818181"/>
                     
                    </View>
  
                   
                     <TouchableOpacity style={{justifyContent:"center",width:'95%',backgroundColor:'#465bd8',height:50,
     marginBottom:30,borderRadius:10,marginTop:17}} onPress={this.Insert} >
      <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color:'white'}}>
       Créer maintenant
      </Text>
     </TouchableOpacity>
                      <View style={{flex:1,flexDirection:"column",justifyContent:'center',
                    mearginBottom:40, alignItems:'center',marginBottom:200}}>
                      <Text style={{fontSize:17,color:'#818181'}}>
                        Vous avez deja un compte?
                      </Text>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Welcome')} >
                       <Text style={{fontSize:18,color:"#333"}}>Connectez vous</Text>
                      </TouchableOpacity>
                      </View>
  
                  </View>
        </View>
      </ScrollView>
    );
  }
}



 




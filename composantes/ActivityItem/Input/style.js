import { StyleSheet } from "react-native";
import { PADDING } from "../../../outils/constantes";

const Input = StyleSheet.create({
    container:{
     
       flexDirection:'row',
       justifyContent :'space-between',
       backgroundColor:'#eee',  
        
    },
    send:{
       flex:1
    },
    input:{
        flex:1,
        backgroundColor:'white',
        height:60,
        padding:5,
        marginRight:5
        
    },
    send:{
        backgroundColor:"green",
        padding:8,
        paddingHorizontal:15,
        paddingVertical:18,
        color:'white',
        alignItems:'center'
    }
    
})

export default Input;
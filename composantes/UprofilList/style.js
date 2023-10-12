import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/constantes';
const setS = StyleSheet.create({
        container:{
            flexDirection:"row",
            backgroundColor:"white",
            paddingHorizontal:PADDING.horizontal,
            paddingVertical:PADDING.vertical,
            elevation:3,
            marginLeft:10,
            marginRight:10,
            marginTop:10, 
            marginBottom:6, 
            alignItems:"center", 
            borderRadius:8,
            justifyContent:'space-between'    
        },
        icon:{
            color:"blue"
        },
        
        img:{
            height:70,
            width:70,
         
        },
        info:{
            flexDirection:"column",        
            flex:1,
            padding:8
        }
       

})

export default setS;
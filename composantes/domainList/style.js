import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/constantes';
const setD = StyleSheet.create({
        container:{
            flexDirection:"row",
            backgroundColor:"white",
            paddingHorizontal:PADDING.horizontal,
            paddingVertical:PADDING.vertical,
            elevation:1,
            marginLeft:10,
            marginRight:10,
            marginTop:10, 
            marginBottom:6, 
            alignItems:"center", 
            borderRadius:8,
            justifyContent:'space-between'    
        },
        domaine:{
            fontWeight:"bold",
            fontSize:15,
            width:120,
            
        },
        img:{
            height:90,
            width:90,
            marginBottom:4,
            borderRadius:10,
         
        },
        
        icon:{
            color:"blue"
        },
        
        
        info:{
            flexDirection:"column",        
            flex:1,
            padding:8
        }
       

})

export default setD;
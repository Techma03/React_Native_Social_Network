import { StyleSheet } from "react-native-web";
import { PADDING } from "../../outils/constantes";
const set = StyleSheet.create({
   container:{
    flex:1,
   },
   header:{
        flexDirection:"row",
        backgroundColor:"white",
        elevation:3,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        alignItems:"center",
        borderRadius:5
        
    },
    
    
    name:{
        fontWeight:"bold",
        marginBottom:5,
        
    },
    email:{
        left:2,
        marginBottom:5
    },
    img:{
        height:90,
        width:90,
        marginBottom:4,
        borderRadius:50,
        
        
    },
    btn:{
        color:"white",
        alignItems:"center",
        paddingHorizontal:18,
        paddingVertical:8,
    },
    Msg:{
        height:38,
        width:145,
        backgroundColor:"blue",
        marginLeft:110,
        marginBottom:301,
        borderRadius:15
    },
    info:{
        flexDirection:"column",        
        flex:1,
        padding:8,
        marginBottom:4,
    },
   

})

export default set;
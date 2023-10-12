import { StyleSheet } from "react-native";
import { PADDING } from "../../../outils/constantes";

const Mstyle = StyleSheet.create({
    msgcontainer:{
        flexDirection:"row",
        alignItems:"center",
        elevation:2,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:"white",
        marginTop:15,
        borderRadius:8
        
    },
    lmsg:{
        right:3
    },
    msgImg:{
        width:70,
        height:70,
        borderRadius:40,
        marginRight:15
      
    },
    date_name:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
       
       
    },
    root:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    name:{
        fontWeight:"bold",
    
    },
    Msginfo:{
        flexDirection:"column",        
        flex:1,
        paddingHorizontal:PADDING.horizontal
    }
})

export default Mstyle;
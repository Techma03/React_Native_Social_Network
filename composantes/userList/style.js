import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const User = StyleSheet.create({
    msgcontainer:{
        flexDirection:"row",
        alignItems:"center",
        
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:"white",
        marginBottom:10,
        borderRadius:8,
       
       
        
    },
    loc:{
        right:1
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

export default User;
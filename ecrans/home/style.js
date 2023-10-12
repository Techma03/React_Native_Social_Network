import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/constantes';
import { COLORS } from '../../outils/constantes';

const DashboardStyles = StyleSheet.create({
    img:{
        height:50,
        width:50
    },
    time:{
        marginLeft:80,
        marginBottom:15,
       
    },
    header:{
        backgroundColor :'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        height:60,
        elevation:3
    },
    logo:{
        fontSize:26,
        fontWeight:'bold',
        width:100,
        color:'blue'
    },
    scrollableList:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical
    },
    title:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical:PADDING.paddingVertical,
        
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
       
      

    },
    title_space_between:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    titleBold:{
        fontWeight:"bold",
    },
    link:{
        color:COLORS.main,
    },
    doctorContainer:{
        paddingHorizontal:5,
        paddingVertical:5,
    },
    doctorCard:{
        flex:1,
        flexDirection:"column", 
        backgroundColor:"white",
        elevation:2,
        paddingHorizontal:5,
        paddingVertical:5,
        padding:10,
        marginBottom:20,
        marginTop:20,
        borderRadius:5,



    },
    doctorInfo:{
        flexDirection:"column"
    },
    Dname:{
        fontWeight:"bold",
        fontSize:16,
        marginBottom:2,
        width:100
    },
    Userfonction:{
        fontSize:14,
    },
    Dspec:{
        color:"white",
        backgroundColor:"#695cd4",
        
        padding:5,
        width:60,
        fontSize:14,
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
        flexDirection:"row",
        
    
    },
    operation:{
        marginTop:15,
        flexDirection:"row"
    },
    Dspec2:{
        color:"white",
        backgroundColor:"#695cd4",
        padding:5,
        marginLeft:10,
        width:90,
        fontSize:14,
        borderRadius:10,
        alignContent:"center",
        alignItems:"center",
       
        
    
    },
    doctorImg:{
        width:340,
        alignItems:"center",
        height:500,
        marginRight:15,
        borderRadius:10
       
    },
    userInfo:{
        flexDirection:"column"
    },
    Header:{
       flexDirection:"row",
       alignContent:"center",
       alignItems:"center",
       marginBottom:10
    },
    UserImg:{
        width:50,        
        height:50,
        marginRight:15,
        borderRadius:30
    },
   
});


export default DashboardStyles;
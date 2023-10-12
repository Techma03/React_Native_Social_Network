import {StyleSheet} from 'react-native';
import { PADDING } from '../../../outils/constantes';
const style = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:5,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    }

})

export default style;
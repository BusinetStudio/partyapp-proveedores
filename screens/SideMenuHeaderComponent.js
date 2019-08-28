import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//make a compontent
const SideMenuHeader = ({headerStyle, userName, onPress}) =>{

   return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.viewStyle,headerStyle]}>
            <View style={styles.headerTextStyle}>
                <Text style={styles.ProfileNameStyle}>{userName?userName:""}</Text>
            </View>
        </TouchableOpacity>
   );

};

//style for this component
const styles = {
    viewStyle:{
        backgroundColor:'#fff',
        height:50,
        padding:10,
    },
    textStyle:{
        fontSize:20,
        color:'#000'
    },
    headerTextStyle:{
        marginBottom: 10
    },
    ProfileNameStyle:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        //textAlign:"center"
    },
}
//make the component available to other parts of the app
export default SideMenuHeader;

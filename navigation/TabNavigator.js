import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SolicitudesScreen from '../screens/SolicitudesScreen'
import AceptadasScreen from '../screens/AceptadasScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabStack = createBottomTabNavigator({
    Solicitudes:{
       screen: SolicitudesScreen,
       navigationOptions:{
         header:null
       }
     },
     Aceptados:{
       screen: AceptadasScreen,
       navigationOptions:{
         header:null
       }
     },
   },
   {
       defaultNavigationOptions: ({ navigation }) => ({
         tabBarIcon: ({ focused, horizontal, tintColor }) => {
           const { routeName } = navigation.state;
           let IconComponent = Ionicons;
           let iconName;
           if (routeName === 'Solicitudes') {
             iconName = `md-paper`; 
           } else if (routeName === 'Aceptados') {
             iconName = `ios-checkmark-circle-outline`;
           }
   
           // You can return any component that you like here!
           return <IconComponent name={iconName} size={40} color={tintColor} style={{marginBottom: -10}} />;
         },
       }),
       tabBarOptions: {
         activeTintColor: '#C63275',
         inactiveTintColor: 'gray',
         labelStyle: {
           fontSize: 20,
           marginBottom: 10
         },
         style: {
           backgroundColor: '#e9e9e9',
           height: 80
         },
       },
     })
     

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ TabStack }, { headerMode: "none" });


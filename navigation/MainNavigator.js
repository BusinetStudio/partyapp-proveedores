import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import FirstScreen from '../screens/FirstScreen';
import Header from '../screens/Header';
import EventItem from '../screens/EventItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SecondScreen from '../screens/SecondScreen';
import PendingDetails from '../screens/PendingDetailsScreen';
import AcepteDetails from '../screens/AcepteDetailsScreen';

export const HomeStack = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      header:null
    }
  },
  Register:{
    screen: RegisterScreen,
    navigationOptions:{
      header:null
    }
  },
  Login:{
    screen: LoginScreen,
    navigationOptions:{
      header:null
    }
  },
  Pending:{
    screen: PendingDetails,
    navigationOptions:{
      header:null
    }
  },
  Aceptep:{
    screen: AcepteDetails,
    navigationOptions:{
      header:null
    }
  },
})

export const TabStack = createBottomTabNavigator({
 Solicitudes:{
    screen: FirstScreen,
    navigationOptions:{
      header:null
    }
  },
  Aceptados:{
    screen: SecondScreen,
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
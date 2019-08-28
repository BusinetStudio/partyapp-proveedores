import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator,createDrawerNavigator,createBottomTabNavigator,TabNavigator  } from 'react-navigation';
import  { Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');
import SideMenuComponent from '../screens/SideMenuComponent'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ActualizarEmpresaScreen from '../screens/ActualizarEmpresaScreen'
import PendingDetails from '../screens/PendingDetailsScreen';
import AcepteDetails from '../screens/AcepteDetailsScreen';
import CambiarContrasenaScreen from '../screens/CambiarContrasenaScreen';
import Tabs from './TabNavigator';  //Tab Nav
import PreguntasFrecuenteScreen from '../screens/PreguntasFrecuenteScreen';
import TerminosCondicioneScreen from '../screens/TerminosCondicioneScreen';
import SoporteScreen from '../screens/SoporteScreen';


//authentication stack for use before login
export const AuthStack =  createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      header:null
    }
  },
  Register:{
    screen:RegisterScreen,
    navigationOptions:{
      header:null
    }
  },
  Login:{
    screen:LoginScreen,
    navigationOptions: {
      header:null
    }
  }
})

export const MainStack =  createDrawerNavigator({
  Solicitudes: {
    screen: Tabs,
    navigationOptions:{
      header:null
    }
  },
  ActualizarEmpresa:{
    screen:ActualizarEmpresaScreen,
    navigationOptions:{
      header:null
    }
  },
  CambiarContrasena:{
    screen: CambiarContrasenaScreen,
    navigationOptions: {
      header:null
    }
  },
  Pending:{
    screen: PendingDetails,
    navigationOptions:{
      header:null
    }
  },
  Acepte:{
    screen: AcepteDetails,
    navigationOptions:{
      header:null
    }
  },
  PreguntasFrecuentes:{
    screen:PreguntasFrecuenteScreen,
    navigationOptions:{
      header:null
    }
  },
  Soporte:{
    screen:SoporteScreen,
    navigationOptions:{
      header:null
    }
  },
  TerminosCondiciones:{
    screen:TerminosCondicioneScreen,
    navigationOptions:{
      header:null
    }
  }
},
{
  drawerWidth:  (65*width/100),
  hideStatusBar: true,
  contentComponent: SideMenuComponent,
})







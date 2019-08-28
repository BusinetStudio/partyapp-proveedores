import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Alert, Image, View} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderTop extends Component {

  constructor(props)
  {
    super(props)
    this.onPressMenu = this.onPressMenu.bind(this)
    this.onPressBack = this.onPressBack.bind(this)
  }

onPressMenu(){
  //console.log('open drawer please')
  console.log(this.props)
  this.props.navigation.dispatch(DrawerActions.openDrawer())
}

onPressBack(){
  this.props.navigation.goBack(null);
}

  render (){

    return (
       <View>
        <LinearGradient colors={['#8F4D93', '#C63275']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
          <Header containerStyle={{backgroundColor: 'transparent'} }
            leftComponent={this.props.menu ? { icon: 'menu', color: '#f4e86a',onPress: ()=>{this.props.navigation.toggleDrawer()} }:{ icon: 'chevron-left',color: '#f4e86a',onPress: this.onPressBack, }}
            centerComponent={<Image source={require('../assets/images/logoTop.png')} style={{width: 150,height: 35,}}></Image>}
            rightComponent={{ icon: 'notifications-none', color: '#f4e86a',onPress: () => alert('ver') }}
          />
        </LinearGradient>
      </View>
    );
  }
}

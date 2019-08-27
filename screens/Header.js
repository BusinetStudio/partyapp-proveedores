import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Alert, Image, View} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderTop extends Component {
  render (){
    return (
       <View>
        <LinearGradient colors={['#8F4D93', '#C63275']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
          <Header containerStyle={{backgroundColor: 'transparent'}}
            leftComponent={{ icon: 'menu', color: '#f4e86a',onPress: () => alert('Menu'), }}
            centerComponent={<Image source={require('../assets/images/logoTop.png')} style={{width: 150,height: 35,}}></Image>}
            rightComponent={{ icon: 'notifications-none', color: '#f4e86a',onPress: () => alert('ver') }}
          />
        </LinearGradient>
      </View>
    );
  }
}

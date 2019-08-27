import React,{Component} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button,Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import styles from '../styles/styles'; 


export default class HomeScreen extends Component {

  onPressRegister(){
    this.props.navigation.navigate('Register');
  }
  onPressLogin(){
    this.props.navigation.navigate('Login');
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
         <Image source={require('../assets/images/logo.png')} style={styles.welcomeImage}/>
        </View> 
        <TouchableOpacity onPress={() => this.onPressLogin()}>
          <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <Text style={styles.textbutton}> INGRESAR </Text>
          </LinearGradient>
        </TouchableOpacity>
            
        <TouchableOpacity onPress={() => this.onPressRegister()}>
          <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <Text style={styles.textbutton}> REGISTRO </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
HomeScreen.navigationOptions = {
  header: null,
};


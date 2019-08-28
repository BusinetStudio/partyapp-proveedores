import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../styles/styles';
import Header from './Header'

export default class CambiarContrasenaScreen extends React.Component {

  render() {  
    return (
      <View style={{flex:1}}>
        <Header {...this.props} menu={true}/>
        <ScrollView style={{paddingHorizontal:40}}>
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Cambiar Contraseña</Text>
          <TextInput 
            style={estilo.inputElement}
            placeholder='Contraseña' 
            onChangeText={(text) => this.setState({contrasena: text})}
            autoCapitalize = 'none'
            secureTextEntry={true}
          />
          <TextInput 
            style={estilo.inputElement}
            placeholder='Repetir Contraseña' 
            onChangeText={(text) => this.setState({contrasena2: text})}
            autoCapitalize = 'none'
            secureTextEntry={true}
          />
          
          <View style={{alignItems:'center', marginTop: 30}}>
            <TouchableOpacity
                style={[estilo.button,{marginBottom:20}]} 
            >
                <LinearGradient
                    colors={['#C63275', '#8F4D93']}
                    start={[1,1]}
                    end={[0,0]}
                    style={estilo.gradientButton}>
                    <Text style={{
                    fontWeight: '700',
                    color: '#fff'
                    }}>GUARDAR</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilo.button,{marginBottom:20}]}
                onPress={() => this.props.navigation.navigate('home')} 
            >
                <View
                style={[estilo.gradientButton, {backgroundColor: '#E9E9E9'}]}>
                    <Text style={{
                        fontWeight: '700',
                        color: '#333'
                    }}>CANCELAR</Text>
                </View>
            </TouchableOpacity>

        </View>
        </ScrollView>
      </View>
    )
  }
}
const estilo = StyleSheet.create({
  loginContainer: { 
      backgroundColor: '#f4f4f4',
      flex: 1,
      justifyContent: 'space-between',
      paddingLeft: 40,
      paddingRight: 40,
  },
  button:{
      marginBottom: 20,
      width: 200
  },
  gradientButton: {
      paddingVertical: 15, 
      paddingHorizontal: 30, 
      alignItems: 'center', 
      borderRadius: Platform.OS === 'android' ? 30 : 22 
  },
  inputElement: {
      marginBottom: 10,
      padding: 5,
      borderWidth: 1,
      borderColor: '#78B7B6',
      borderRadius: 6
  },
  googleButton: {
      backgroundColor: '#ffffff',
  }
});
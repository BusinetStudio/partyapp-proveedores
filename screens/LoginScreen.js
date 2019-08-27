import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Alert, Image, TextInput, TouchableOpacity, View, Button } from 'react-native';
import styles from '../styles/styles'; 


export default class LoginScreen extends Component {

    onPressIngresar(){
        this.props.navigation.navigate('Solicitudes');
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <Text style={[styles.Title, {marginBottom:120}]}>INICIO DE SESIÓN</Text>
                <Text style={styles.SubTitle}>Ingresa tus datos</Text>
                <TextInput 
                    style={styles.inputElement}
                    placeholder='Usuario' 
                    onChangeText={(text) => this.setState({username : text})}
                    autoCapitalize = 'none'
                />
                <TextInput 
                    style={[styles.inputElement,{marginBottom:60}]}
                    placeholder='Contraseña' 
                    onChangeText={(text) => this.setState({password1 : text})}
                    autoCapitalize = 'none'
                    secureTextEntry={true}
                />
                <View style={{marginTop:40,alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.onPressIngresar()}>
                        <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                            <Text style={styles.textbutton}>INGRESAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[styles.button, {backgroundColor: '#E9E9E9'}]}>
                            <Text style={styles.textcancelar}>CANCELAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
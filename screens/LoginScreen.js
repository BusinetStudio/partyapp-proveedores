import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Alert, Image, TextInput, TouchableOpacity, View, Button } from 'react-native';
import styles from '../styles/styles'; 


export default class LoginScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    onPressIngresar(){
        this.props.navigation.navigate('Solicitudes');
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <Text style={styles.Title}>INICIO DE SESIÓN</Text>
                <View>
                    <Text style={styles.SubTitle}>Ingresa tus datos</Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Usuario' 
                        onChangeText={(username) => this.setState({username})}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Contraseña' 
                        onChangeText={(password) => this.setState({password})}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.onPressIngresar()}>
                        <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                            <Text style={styles.textbutton}>INGRESAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[styles.button, {backgroundColor: '#E9E9E9'}]}>
                            <Text style={styles.textcancelar}>CANCELAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
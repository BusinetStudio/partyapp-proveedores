import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text,Alert, TextInput, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles'; 

export default class RegisterScreen extends Component {

    onPressRegistrarse(){
      Alert.alert('Se ha registrado')
    }
    
    render() {     
        return(
            <ScrollView style={{marginTop:20}}>
                <View style={styles.loginContainer}>
                    <Text style={styles.Title}>REGISTRO</Text>
                </View>
                <View>
                    <Text style={styles.SubTitle}>Datos de la cuenta</Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Usuario' 
                        onChangeText={(text) => this.setState({username : text})}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Correo Electrónico' 
                        onChangeText={(text) => this.setState({email : text})}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Contraseña' 
                        onChangeText={(text) => this.setState({password1 : text})}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Repetir Contraseña' 
                        onChangeText={(text) => this.setState({password2 : text})}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                    <Text style={styles.SubTitle}>Datos del usuario</Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Nombre y apellido' 
                        onChangeText={(text) => this.setState({nombreCompleto : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Nombre de la empresa' 
                        onChangeText={(text) => this.setState({nombreEmpresa : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Dirección' 
                        onChangeText={(text) => this.setState({direccion : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Distrito' 
                        onChangeText={(text) => this.setState({distrito : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Teléfono' 
                        onChangeText={(text) => this.setState({telefono : text})}
                    />
                </View>
                <View style={{marginTop:40,alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.onPressRegistrarse()}>
                        <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                            <Text style={styles.textbutton}>REGISTRARSE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[styles.button, {backgroundColor: '#E9E9E9'}]}>
                            <Text style={styles.textcancelar}>CANCELAR</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}
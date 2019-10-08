import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView , StatusBar} from 'react-native';
import styles from '../styles/styles'; 
import Authentication from '../modules/authentication'

export default class RegisterScreen extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            email : '',
            password: '',
            repeatPassword: '',
            fullname : '',
            companyName :'',
            address: '',
            distric: '',
            phoneNumber : ''
        }
    }

    async onPressRegistrarse(){
        this.setState({ email:this.state.email.toLowerCase(),loading:true });
        const { username, email , password } = this.state;
        const nombreCompleto = this.state.fullname;
        const direccion = this.state.address;
        const distrito = this.state.distric;
        const telefono = this.state.phoneNumber;
        const nombreEmpresa = this.state.companyName;

        Authentication.register({username,email,password,nombreCompleto,direccion,distrito,telefono,nombreEmpresa})
            .then((result) => {
                if(result){
                    alert("Registrado con exito")
                    this.props.navigation.navigate("Login")
                }else{
                   alert("Usuario ya existe")
                }
        })
    }
    
    render() {     
        return(
            <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100}>
                <ScrollView style={{marginTop: StatusBar.currentHeight}}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.Title}>REGISTRO</Text>
                    </View>
                    <View>
                        <Text style={styles.SubTitle}>Datos de la cuenta</Text>
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Usuario' 
                            onChangeText={(username) => this.setState({username})}
                            autoCapitalize = 'none'
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Correo Electrónico' 
                            onChangeText={(email) => this.setState({email})}
                            autoCapitalize = 'none'
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Contraseña' 
                            onChangeText={(password) => this.setState({password})}
                            autoCapitalize = 'none'
                            secureTextEntry={true}
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Repetir Contraseña' 
                            onChangeText={(repeatPassword) => this.setState({repeatPassword})}
                            autoCapitalize = 'none'
                            secureTextEntry={true}
                        />
                        <Text style={styles.SubTitle}>Datos del usuario</Text>
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Nombre y apellido' 
                            onChangeText={(fullname) => this.setState({fullname})}
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Nombre de la empresa' 
                            onChangeText={(companyName) => this.setState({companyName})}
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Dirección' 
                            onChangeText={(address) => this.setState({address})}
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Distrito' 
                            onChangeText={(distric) => this.setState({distric})}
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Teléfono' 
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.onPressRegistrarse()}>
                            <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                                <Text style={styles.textbutton}>REGISTRARSE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <View style={[styles.button, {backgroundColor: '#E9E9E9'}]}>
                                <Text style={styles.textcancelar}>CANCELAR</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
        )
    }
}
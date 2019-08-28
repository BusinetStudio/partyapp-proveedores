import React,{Component} from 'react';
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
import { Dropdown } from 'react-native-material-dropdown';

var distritos = require('../assets/resources/distritos.json');
var limaArr= distritos['3927'];

export default class ActualizarDatosScreen extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      fechaNacimiento: ''
    }
  }
  render() {  
    arrayDistritos =[]
    limaArr.map((prop, key) => {
      arrayDistritos.push({value: prop['nombre_ubigeo']})
    })
    return (
      <View style={{flex:1}}>
         <Header {...this.props} menu={true}/>
        <ScrollView >
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Actualizar Datos</Text>
          <TextInput 
            style={styles.inputElement}
            placeholder='Usuario' 
            onChangeText={(text) => this.setState({usuario: text})}
            autoCapitalize = 'none'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Email' 
            onChangeText={(text) => this.setState({email: text})}
            autoCapitalize = 'none'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Nombre Empresa' 
            onChangeText={(text) => this.setState({nombreCompleto: text})}
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Teléfono' 
            onChangeText={(text) => this.setState({telefono: text})}
            keyboardType = 'numeric'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Celular' 
            onChangeText={(text) => this.setState({celular: text})}
            keyboardType = 'numeric'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Direccion' 
            onChangeText={(text) => this.setState({direccion: text})}
          />
          <View style={{marginTop: -20,marginHorizontal:40}}>
            <Dropdown
              label='Seleccionar distrito'
              onChangeText={(value) => this.setState({distrito: value})}
              data={arrayDistritos}
            />
          </View>
          <View style={{alignItems:'center',marginTop:30}}>
                    <TouchableOpacity onPress={() => this.onPressIngresar()}>
                        <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                            <Text style={styles.textbutton}>GUARDAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={[styles.button, {backgroundColor: '#E9E9E9'}]}>
                            <Text style={styles.textcancelar}>CANCELAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </ScrollView>
      </View>
    )
  }
}

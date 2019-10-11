import React,{Component} from 'react';
import {
  Platform,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../styles/styles';
import Header from './Header'
import { Dropdown } from 'react-native-material-dropdown';
import Authentication from '../modules/authentication'
var distritos = require('../assets/resources/distritos.json');
var limaArr= distritos['3927'];
import EventEmitter from '../modules/eventEmiter'

export default class ActualizarDatosScreen extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      username : '',
      nombreEmpresa: '',
      email: '' ,
      telefono : '',
      celular: '',
      direccion: '',
      distrito: '',
      id: '',
      token: '',
      servicios: [],
      privilege : "Proveedor"
    }
  }

  async componentDidMount()
  {
    Authentication.currentToken() .then((result) => {
      this.setState({
        id : result.id,
        token : result.token,
        username : result.username ? result.username : '',
        nombreEmpresa: result.nombreEmpresa ? result.nombreEmpresa: '',
        email : result.email ? result.email : '',
        telefono : result.telefono ? result.telefono : '',
        celular: result.celular ? result.celular : '',
        direccion : result.direccion ? result.direccion : '',
        distrito : result.distrito ? result.distrito : '',
        servicios : result.servicios ? result.servicios : [],
        privilege : "Proveedor"
      })
    })
  }

  async actualizar()
  {
    this.setState({ email:this.state.email.toLowerCase(),loading:true });
    const { privilege , id, username, email, nombreEmpresa ,  direccion , distrito, telefono , celular , token , servicios} = this.state;
    Authentication.update({privilege , id, username, email, nombreEmpresa ,  direccion , distrito, telefono , celular , servicios})
        .then(async (result) => {
            console.log(result)
            if(result){
                //update token
                const auth = {
                  uid: id,
                  id,
                  username,
                  token,
                  email,
                  nombreEmpresa ,
                  direccion ,
                  distrito,
                  telefono,
                  celular,
                  servicios
              }
             await AsyncStorage.setItem('token', JSON.stringify(auth));
             EventEmitter.emit('refreshUser', true)
             alert("Actualizado con exito")
            }else{
                alert("Error al intentar actualizar")
            }
    })
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
            value = {this.state.username}
            onChangeText={(username) => this.setState({username})}
            autoCapitalize = 'none'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Email' 
            value = {this.state.email}
            onChangeText={(email) => this.setState({email})}
            autoCapitalize = 'none'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Nombre Empresa' 
            value = {this.state.nombreEmpresa}
            onChangeText={(nombreEmpresa) => this.setState({nombreEmpresa})}
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Teléfono' 
            value = {this.state.telefono}
            onChangeText={(telefono) => this.setState({telefono})}
            keyboardType = 'numeric'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Celular' 
            value={this.state.celular}
            onChangeText={(celular) => this.setState({celular})}
            keyboardType = 'numeric'
          />
          <TextInput 
            style={styles.inputElement}
            placeholder='Direccion' 
            value={this.state.direccion}
            onChangeText={(direccion) => this.setState({direccion})}
          />
          <View style={{marginTop: -20,marginHorizontal:40}}>
            <Dropdown
              label='Seleccionar distrito'
              value={this.state.distrito}
              onChangeText={(distrito) => this.setState({distrito})}
              data={arrayDistritos}
            />
          </View>
          <View style={{alignItems:'center',marginTop:30}}>
                    <TouchableOpacity onPress={() => this.actualizar()}>
                        <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                            <Text style={styles.textbutton}>GUARDAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Solicitudes')}>
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

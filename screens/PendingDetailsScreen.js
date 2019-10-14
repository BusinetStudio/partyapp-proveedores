import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, FlatList, ScrollView, TouchableOpacity, Text, View,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome'; ;
import styles from '../styles/styles';
import HeaderTop from '../screens/Header';
import Eventos  from '../modules/eventos'
import moment from 'moment'

export default class PendingDetailsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props)
  {
    super(props)
    this.state = {
      eventType : "",
      eventGuest : "",
      eventDate : "",
      eventHour : "",
      eventLocation : "",
      eventServices : []
    }
  }

  async componentDidMount(){
    this.props.navigation.addListener ('willFocus', () =>{
      const id = this.props.navigation.getParam('eventId', ''); 
      const userId = this.props.navigation.getParam("userId","")
      Eventos.getFiesta({id}).then( (result) =>{
        if( result && result.valid && result.result.length > 0) 
        {
          let cotizacion = result.result[0]
          this.setState({
            eventId: id,
            id_usuario : userId,
            eventName: cotizacion.nombre,
            eventType : cotizacion.categoria,
            eventGuest : cotizacion.adultos + cotizacion.ninos,
            eventDate : cotizacion.fecha_del_evento,
            eventHour : cotizacion.hora_del_evento,
            eventLocation : cotizacion.direccion,
            eventServices: cotizacion.servicios_solicitados,
            eventServicesDetails : cotizacion.servicios
          })
        }
      })
    }) 
  }

  update(name, value){
    this.setState({ [name]: value })
  }

  cotizar()
  {
    const {eventServices , eventId , id_usuario} = this.state
    const id_evento = eventId
    const aceptada = true
    const fecha_de_cotizacion = moment().format("YYYY-MM-DD")
    let cotizacion = []
    for(key in eventServices)
    {
      let value = this.state[eventServices[key]]
      if(value)
      {
        cotizacion.push({
          [eventServices[key]]:{
            costo: value
          }
        })
      }
    }
    Eventos.cotizar({id_usuario,id_evento,aceptada,fecha_de_cotizacion,cotizacion}).then( (result) =>{
       if(result && result.valid)
       {
         alert("Cotización realizada")
         this.props.navigation.navigate("Solicitudes")
       }else{
         alert("Error inesperado")
       }
    })
  }

  render() {  
    const { eventName, eventType, eventGuest , eventDate, eventHour, eventLocation, eventServices , eventServicesDetails} = this.state
    return (
      <View>
        <HeaderTop {...this.props} menu={false} ></HeaderTop>
        <ScrollView>
          <View style={{marginBottom:40}}>
            <Text style={[styles.Title, {marginBottom:20}]}>{eventName}</Text>
            <Text style={styles.EventTitle}>{eventType}</Text>
            <Text style={[styles.EventDescription, {fontWeight: '400'}]}>Invitados: {eventGuest}</Text>
            <Text style={styles.EventDescription}>
              < Icon name='calendar'style={styles.EventDescription}/> {" "+eventDate}
            </Text>
            <Text style={styles.EventDescription}>
              < Icon name='clock-o' style={styles.EventDescription}/> {" "+eventHour}
            </Text>
            <Text style={styles.EventDescription}>
            < Icon name='map-marker' style={[styles.EventDescription, {marginLeft:37}]}/>
              {eventLocation}
            </Text>
          </View>
          <FlatList data={eventServices} 
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item , index}) => {
              return(
                <KeyboardAvoidingView behavior="padding" enabled>
                  <View>
                    <Text style={styles.EventTitle}>{item}</Text>
                    <Text style={styles.EventDescription}>Duración: {eventServicesDetails[index][item].duracion}</Text>
                    <Text style={styles.EventDescription}>Descripción: {eventServicesDetails[index][item].detalles}</Text>
                    <Text style={styles.EventDescriptionParagraf}></Text>
                  </View>
                  <View>
                  <Text style={styles.EventDescriptionCosto}>Costo</Text>
                    <TextInput 
                      style={[styles.inputElement, {marginTop:10}]}
                      placeholder='S/' 
                      onChangeText={(cost) => this.update(item,cost)}
                      autoCapitalize = 'none'
                    />
                  </View>
                  <View style={styles.EventBorderLine}/>
                </KeyboardAvoidingView>
              )
            }}
          />
          <View style={{marginBottom: 70, alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.cotizar()}>
              <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.textbutton}>COTIZAR</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
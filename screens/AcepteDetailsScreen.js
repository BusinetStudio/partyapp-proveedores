import React, { Component } from 'react';
import { Image, TextInput, Platform, ScrollView, TouchableOpacity, Text, View, Linking  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome'; ;
import styles from '../styles/styles';
import HeaderTop from '../screens/Header';
import Eventos  from '../modules/eventos'

export default class PendingDetails extends Component {
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
      Eventos.getFiesta({id}).then( (result) =>{
        if( result && result.valid && result.result.length > 0) 
        {
          let cotizacion = result.result[0]
          this.setState({
            eventName: cotizacion.nombre,
            eventType : cotizacion.categoria,
            eventGuest : cotizacion.adultos + cotizacion.ninos,
            eventDate : cotizacion.fecha_del_evento,
            eventHour : cotizacion.hora_del_evento,
            eventLocation : cotizacion.direccion,
            eventServices: cotizacion.servicios_solicitados
          })
        }
      })
    })
  }

  render() {  
    const { navigation } = this.props;
    const { eventName, eventType, eventGuest , eventDate, eventHour, eventLocation, eventServices} = this.state
    const clientName = navigation.getParam('clientName','');
    const clientPhone = navigation.getParam('clientPhone','');
    const clientMail = navigation.getParam('clientMail','');

   
    return (
      <View>
        <HeaderTop {...this.props} menu={false}></HeaderTop>
        <ScrollView>
          <View style={{marginBottom:40}}>
            <Text style={[styles.Title, {marginBottom:20}]}>{eventName ? eventName.toUpperCase() : ""}</Text>
            <Text style={styles.EventTitle}>{eventType ? eventType.toUpperCase(): ""}</Text>
            <Text style={[styles.EventDescription, {fontWeight: '400'}]}>Invitados: {eventGuest}</Text>
            <Text style={styles.EventDescription}>
              < Icon name='calendar'style={styles.EventDescription}/> {" "+eventDate}
            </Text>
            <Text style={styles.EventDescription}>
              < Icon name='clock-o' style={styles.EventDescription}/>{" "+eventHour}
            </Text>
            <Text style={styles.EventDescription}>
            < Icon name='map-marker' style={[styles.EventDescription, {marginLeft:37}]}/>
              {eventLocation}
            </Text>
          </View>
          <View>
            <Text style={styles.EventTitle}>{clientName}</Text>
            <Text style={styles.EventDescription}>Teléfono:{clientPhone}</Text>
            <Text style={styles.EventDescription}>Email:{clientMail}</Text>
          </View>
          <View style={{marginTop: 120, alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{Linking.openURL("telprompt:${"+clientPhone+"}");}} >
              <LinearGradient colors={['#8F4D93', '#C63275']} style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.textbutton}>LLAMAR</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

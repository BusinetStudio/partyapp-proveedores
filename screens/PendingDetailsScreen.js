import React, { Component } from 'react';
import { Image, TextInput, Platform, ScrollView, TouchableOpacity, Text, View,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome'; ;
import styles from '../styles/styles';
import HeaderTop from '../screens/Header';

export default class PendingDetails extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {  
    const { navigation } = this.props;
    const eventName = navigation.getParam('eventName', '');
    const eventType = navigation.getParam('eventType', '');
    const eventGuest = navigation.getParam('eventGuest','');
    const eventDate = navigation.getParam('eventDate','');
    const eventHour = navigation.getParam('eventHour','');
    const eventLocation = navigation.getParam('eventLocation','');
    const eventAnimationTime= navigation.getParam('eventAnimationTime','');
    const eventDescription= navigation.getParam('eventDescription','');
    const eventQuantity= navigation.getParam('eventQuantity','');
    const eventApproximateCost= navigation.getParam('eventApproximateCost','');
    const eventAnimationDescription= navigation.getParam('eventAnimationDescription','');
    //const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View>
        <HeaderTop {...this.props} menu={false} ></HeaderTop>
        <ScrollView>
          <View style={{marginBottom:40}}>
            <Text style={[styles.Title, {marginBottom:20}]}>{eventName}</Text>
            <Text style={styles.EventTitle}>{eventType}</Text>
            <Text style={[styles.EventDescription, {fontWeight: '400'}]}>Invitados:{eventGuest}</Text>
            <Text style={styles.EventDescription}>
              < Icon name='calendar'style={styles.EventDescription}/> 
              {eventDate}
            </Text>
            <Text style={styles.EventDescription}>
            < Icon name='clock-o' style={styles.EventDescription}/>
              {eventHour}
            </Text>
            <Text style={styles.EventDescription}>
            < Icon name='map-marker' style={[styles.EventDescription, {marginLeft:37}]}/>
              {eventLocation}
            </Text>
          </View>
          <View>
            <Text style={styles.EventTitle}>Animación</Text>
            <Text style={styles.EventDescription}>Duración: {eventAnimationTime}</Text>
            <Text style={styles.EventDescription}>Descripción:</Text>
            <Text style={styles.EventDescriptionParagraf}>{eventDescription}</Text>
          </View>
          <View>
          <Text style={styles.EventDescriptionCosto}>Costo</Text>
            <TextInput 
              style={[styles.inputElement, {marginTop:10}]}
              placeholder='S/' 
              onChangeText={(text) => this.setState({username : text})}
              autoCapitalize = 'none'
            />
          </View>
          <View style={styles.EventBorderLine}/>
          <View>
            <Text style={styles.EventTitle}>Recuerdos</Text>
            <Text style={styles.EventDescription}>Cantidad: {eventQuantity}</Text>
            <Text style={styles.EventDescription}>Costo aproximado: {eventApproximateCost}</Text>
            <Text style={styles.EventDescription}>Descripción:</Text>
            <Text style={styles.EventDescriptionParagraf}>{eventAnimationDescription}</Text>
          </View>
          <View>
            <Text style={styles.EventDescriptionCosto}>Costo</Text>
            <TextInput 
              style={[styles.inputElement, {marginTop:10}]}
              placeholder='S/' 
              onChangeText={(text) => this.setState({username : text})}
              autoCapitalize = 'none'
            />
          </View>
          <View style={styles.EventBorderLine}/>
          <View style={{marginBottom: 70, alignItems:'center'}}>
            <TouchableOpacity>
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
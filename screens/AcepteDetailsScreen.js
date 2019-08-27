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
    return (
      <View>
        <HeaderTop></HeaderTop>
        <ScrollView>
          <View style={{marginBottom:40}}>
            <Text style={[styles.Title, {marginBottom:20}]}>Nombre del evento</Text>
            <Text style={styles.EventTitle}>Baby Shower</Text>
            <Text style={[styles.EventDescription, {fontWeight: '400'}]}>Invitados:</Text>
            < Icon name='calendar' style={styles.EventDescription}/>
            < Icon name='clock-o' style={styles.EventDescription}/>
            < Icon name='map-marker' style={[styles.EventDescription, {marginLeft:37}]}/>
          </View>
          <View>
            <Text style={styles.EventTitle}>Nombre del Cliente</Text>
            <Text style={styles.EventDescription}>Teléfono:</Text>
            <Text style={styles.EventDescription}>Email:</Text>
          </View>
          <View style={{marginTop: 120, alignItems:'center'}}>
            <TouchableOpacity>
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
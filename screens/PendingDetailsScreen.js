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
            <Text style={styles.EventTitle}>Animación</Text>
            <Text style={styles.EventDescription}>Duración:</Text>
            <Text style={styles.EventDescription}>Descripción:</Text>
            <Text style={styles.EventDescriptionParagraf}>Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.</Text>
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
            <Text style={styles.EventDescription}>Cantidad:</Text>
            <Text style={styles.EventDescription}>Costo aproximado:</Text>
            <Text style={styles.EventDescription}>Descripción:</Text>
            <Text style={styles.EventDescriptionParagraf}>Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.</Text>
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
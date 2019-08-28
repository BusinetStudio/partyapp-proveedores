import React, { Component } from 'react';
import {Alert, Image, View, Text, TouchableOpacity} from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles'; 




export default class EventItem extends Component {

  constructor(props){
    super(props)
    this.onPressDetail = this.onPressDetail.bind(this)
    this.onPressAcepted = this.onPressAcepted.bind(this)
  }

  onPressDetail(){
    this.props.navigation.navigate('Pending',{
      eventName:this.props.event.eventName,
      eventType:this.props.event.eventType,
      eventGuest:this.props.event.eventGuest,
      eventDate:this.props.event.eventDate,
      eventHour:this.props.event.eventHour,
      eventLocation:this.props.event.eventLocation,
      eventAnimationTime:this.props.event.eventAnimationTime,
      eventDescription:this.props.event.eventDescription,
      eventQuantity:this.props.event.eventQuantity,
      eventApproximateCost:this.props.event.eventApproximateCost,
      eventAnimationDescription:this.props.event.eventAnimationDescription,
    })
  }

  onPressAcepted(){
    this.props.navigation.navigate('Acepte',{
      eventName:this.props.event.eventName,
      eventType:this.props.event.eventType,
      eventGuest:this.props.event.eventGuest,
      eventDate:this.props.event.eventDate,
      eventHour:this.props.event.eventHour,
      eventLocation:this.props.event.eventLocation,
      eventAnimationTime:this.props.event.eventAnimationTime,
      eventDescription:this.props.event.eventDescription,
      eventQuantity:this.props.event.eventQuantity,
      eventApproximateCost:this.props.event.eventApproximateCost,
      eventAnimationDescription:this.props.event.eventAnimationDescription,
      clientName:this.props.event.clientName,
      clientPhone:this.props.event.clientPhone,
      clientMail:this.props.event.clientMail
    })
  }



  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress === 'First'? this.onPressDetail : this.onPressAcepted} >
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={{paddingVertical:10,}}>
            <Text style={styles.TitleItem}>{this.props.event.eventName}</Text>
            <Text style={styles.SubTitleItem}>{this.props.event.eventType}</Text>
          </View>
          <View style={{paddingVertical:10,}}>
            <Text style={styles.DetailItem}> {this.props.event.eventDate} < Icon name='calendar' /></Text>
            <Text style={styles.DetailItem}> {this.props.event.eventHour} < Icon name='clock-o' /></Text>
            <Text style={styles.DetailItem}>{this.props.event.eventLocation} < Icon name='map-marker'/></Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

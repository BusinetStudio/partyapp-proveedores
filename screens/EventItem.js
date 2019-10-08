import React, { Component } from 'react';
import {Alert, Image, View, Text, TouchableOpacity} from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles'; 




export default class EventItem extends Component {

  constructor(props){
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress(){
    const {onPress , eventId , userID} = this.props
    onPress(eventId , userID)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} >
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={{paddingVertical:10,}}>
            <Text style={styles.TitleItem}>{this.props.eventName}</Text>
            <Text style={styles.SubTitleItem}>{this.props.eventType}</Text>
          </View>
          <View style={{paddingVertical:10,}}>
            <Text style={styles.DetailItem}> {this.props.eventDate} < Icon name='calendar' /></Text>
            <Text style={styles.DetailItem}> {this.props.eventHour} < Icon name='clock-o' /></Text>
            <Text style={styles.DetailItem}>{this.props.eventLocation} < Icon name='map-marker'/></Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

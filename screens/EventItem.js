import React, { Component } from 'react';
import {Alert, Image, View, Text, TouchableOpacity} from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles'; 




export default class EventItem extends Component {

  render() {
    return (
      <TouchableOpacity style={{marginTop: 20}} onPress={this.props.onPress} >
        <View style={{flex: 1, flexDirection: 'row', width: 100, height: 100}}>
          <View style={{width: 180, height: 50}}>
            <Text style={styles.TitleItem}>{this.props.eventName}</Text>
            <Text style={styles.SubTitleItem}>{this.props.eventType}</Text>
          </View>
          <View style={{width: 120, height: 50}}>
            <Text style={styles.DetailItem}> {this.props.eventDate} < Icon name='calendar' /></Text>
            <Text style={styles.DetailItem}> {this.props.eventHour} < Icon name='clock-o' /></Text>
            <Text style={styles.DetailItem}>{this.props.eventLocation} < Icon name='map-marker'/></Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

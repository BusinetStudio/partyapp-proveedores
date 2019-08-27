import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Alert, View ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HeaderTop from '../screens/Header';
import EventItems from'../screens/EventItem';
import styles from '../styles/styles';
import PendingDetails from '../screens/PendingDetailsScreen'
;
const data = [{

  "eventName":"Cumplea;os 31 de Franklin",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco"
},
 { "eventName":"Bautizo Carol ",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas"
},{

  "eventName":"Cumplea;os 31 de Franklin1",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco"
},
 { "eventName":"Bautizo Carol1",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas"
},{

  "eventName":"Cumplea;os 31 de Franklin2",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco"
},
 { "eventName":"Bautizo Carol2",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas"
},{

  "eventName":"Cumplea;os 31 de Franklin3",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco"
},
 { "eventName":"Bautizo Carol Cristina3",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas"
},{

  "eventName":"Cumplea;os 31 de Franklin4",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco"
},
 { "eventName":"Bautizo Carol Cristina4",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas"
}]

export default class SecondScreen extends Component {

  constructor(props){
    super(props)
    this.onPressDetail = this.onPressDetail.bind(this)
  }

   _keyExtractor = (item, index) => item.eventName;

   separator = () => {
    return(
      <View style={{borderWidth:1,borderColor:"#c3c3c3", marginTop: -25}}></View>
    )}

    onPressDetail() {
      this.props.navigation.navigate('Aceptep')
    }

  render (){
    return (
      <View>
        <HeaderTop></HeaderTop>
        <Text style={styles.Title}>Listado de solicitudes aceptadas</Text>
        <FlatList
            data={data}
            renderItem={({item}) => <EventItems eventName={item.eventName} eventType={item.eventType}
            eventDate={item.eventDate} eventHour={item.eventHour} eventLocation={item.eventLocation}
            onPress={this.onPressDetail}/>}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this.separator}
          />
      </View>
    );
  }
}

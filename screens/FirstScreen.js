import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Alert, View ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HeaderTop from '../screens/Header';
import EventItems from'../screens/EventItem';
import styles from '../styles/styles';


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

export default class FirstScreen extends Component {

  constructor(props){
    super(props)
    this.onPressDetail = this.onPressDetail.bind(this)
  }

   _keyExtractor = (item, index) => item.eventName;

   separator = () => {
    return(
      <View style={{borderWidth:1,borderColor:"#e9e9e9", marginTop: -25}}></View>
    )}

    onPressDetail() {
      this.props.navigation.navigate('Pending')
    }

  render (){
    return (
      <View style={{marginBottom:100}}>
        <HeaderTop></HeaderTop>
        <Text style={styles.Title}>Listado de solicitudes</Text>
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


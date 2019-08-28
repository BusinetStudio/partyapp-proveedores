import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Alert, View ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HeaderTop from './Header';
import EventItems from'./EventItem';
import styles from '../styles/styles';



const data = [{

  "eventName":"Cumplea;os 31 de Franklin",
  "eventGuest":"5",
  "eventType":"Fiesta de Adultos",
  "eventDate":"  24/08/2019",
  "eventHour":"  18:00",
  "eventLocation":"   Montielco",
  "eventAnimationTime":"  5 hrs",
  "eventDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
  "eventQuantity":"  50",
  "eventApproximateCost":"  60$",
  "eventAnimationDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas.",

},
 { "eventName":"Bautizo Carol ",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas",
  "eventAnimationTime":"  5 hrs",
  "eventDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
  "eventQuantity":"  50",
  "eventApproximateCost":"  60$",
  "eventAnimationDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas.",
},{

  "eventName":"Cumplea;os 31 de Franklin1",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco",
  "eventAnimationTime":"  5 hrs",
  "eventDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
  "eventQuantity":"  50",
  "eventApproximateCost":"  60$",
  "eventAnimationDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas.",

},
 { "eventName":"Bautizo Carol1",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas",
  "eventAnimationTime":"  5 hrs",
  "eventDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
  "eventQuantity":"  50",
  "eventApproximateCost":"  60$",
  "eventAnimationDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas.",
},{

  "eventName":"Cumplea;os 31 de Franklin2",
  "eventType":"Fiesta de Adultos",
  "eventDate":"24/08/2019",
  "eventHour":"18:00",
  "eventLocation":"Montielco",
  "eventAnimationTime":"  5 hrs",
  "eventDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
  "eventQuantity":"  50",
  "eventApproximateCost":"  60$",
  "eventAnimationDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas.",
},
 { "eventName":"Bautizo Carol2",
  "eventType":"Misa",
  "eventDate":"24/08/2019",
  "eventHour":"08:00",
  "eventLocation":"Las Lomas",
  "eventAnimationTime":"  5 hrs",
  "eventDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
  "eventQuantity":"  50",
  "eventApproximateCost":"  60$",
  "eventAnimationDescription":"  Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas.",
}]

export default class SolicitudesScreen extends Component {

  constructor(props){
    super(props)
    //this.onPressDetail = this.onPressDetail.bind(this)
  }

   _keyExtractor = (item, index) => item.eventName;

   separator = () => {
    return(
      <View style={{borderWidth:1,borderColor:"#e9e9e9"}}></View>
    )}


  render (){
    return (
      <View style={{flex:1}}>
        <HeaderTop {...this.props} menu={true} ></HeaderTop>
        <Text style={styles.Title}>Listado de solicitudes</Text>
        <FlatList
            data={data}
            renderItem={({item}) => <EventItems {...this.props} event={item} onPress={'First'}/>}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this.separator}
          />

      </View>
    );
  }
}


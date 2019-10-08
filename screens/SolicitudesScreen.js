import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, RefreshControl, View ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HeaderTop from './Header';
import EventItems from'./EventItem';
import styles from '../styles/styles';
import API from '../modules/eventos'


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
    this.state = {
      solicitudes : [],
      isRefreshing : true
    }
  }

  async componentDidMount()
  {
    this.props.navigation.addListener ('willFocus', () =>{
      this.getSolicitudes()
    })
  }

   _keyExtractor = (item, index) => item._id;

   separator = () => {
    return(
      <View style={{borderWidth:1,borderColor:"#e9e9e9"}}></View>
    )}

    async getSolicitudes(){
      this.setState( { isRefreshing : true})
      API.getSolicitudes().then((result) =>{
        this.setState({isRefreshing : false})
        if(result && result.valid){
          this.setState({
            solicitudes : result.result
          })
        }
      })
    }

  onPressItem(event , userId)
  {
    this.props.navigation.navigate("Pending",{
      eventId : event,
      userId : userId
    })
  }

  render (){
    return (
      <View style={{flex:1}}>
        <HeaderTop {...this.props} menu={true} ></HeaderTop>
        <Text style={styles.Title}>Listado de solicitudes</Text>
        <FlatList
            data={this.state.solicitudes}
            renderItem={({item}) => <EventItems eventId= {item._id} eventName={item.nombre} eventType={item.categoria} eventDate={item.fecha_del_evento} eventHour={item.hora_del_evento} eventLocation={item.distrito} userID={item.id_usuario} onPress={ (event , user) => this.onPressItem(event , user)}/>}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this.separator}
            refreshControl={
              <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={() => this.getSolicitudes()}
                  colors={["#C63275"]}
               />
            }
          />

      </View>
    );
  }
}


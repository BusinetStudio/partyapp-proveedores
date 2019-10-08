import React, { Component } from 'react';
import { Text, RefreshControl, View ,FlatList} from 'react-native';
import HeaderTop from './Header';
import EventItems from'./EventItem';
import styles from '../styles/styles';
import API from '../modules/eventos'

export default class AceptadasScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRefreshing : true,
      cotizaciones : [],
      eventos : []
    }
  }

  async componentDidMount()
  {
    this.props.navigation.addListener ('willFocus', () =>{
      this.getSolicitudes()
    })
  }

  async getSolicitudes(){
    this.setState({isRefreshing : true})
    API.getCotizaciones().then((result) =>{
      if(result && result.valid){
        this.setState({
          eventos : result.result
        },() => this.getDetalleCotizacion())
      }
    })
  }

  async getDetalleCotizacion()
  {
    const {eventos} = this.state
    let cotizaciones = []
    for(key in eventos)
    {
      let id = eventos[key].id_evento
      await API.getFiesta({ id }).then( (result) =>{
        if( result && result.valid && result.result.length > 0) 
        {
          let cotizacion = result.result[0]
          cotizaciones.push(cotizacion)
        }
      })
    }
    this.setState({
      cotizaciones,
      isRefreshing : false
    })
  }


   _keyExtractor = (item, index) => index.toString();

   separator = () => {
    return(
      <View style={{borderWidth:1,borderColor:"#e9e9e9"}}></View>
    )}

    onPressItem(event)
    {
      this.props.navigation.navigate("Acepte",{
        eventId : event,
        clientName: "Jose Romero",
        clientPhone:"  01 234 567890",
        clientMail:"clientname@email.com"
      })
    }
    

  render (){
    return (
      <View style={{flex:1}}>
        <HeaderTop {...this.props} menu={true}></HeaderTop>
        <Text style={styles.Title}>Listado de solicitudes aceptadas</Text>
        <FlatList
            data={this.state.cotizaciones}
            renderItem={({item}) => <EventItems eventId= {item._id} eventName={item.nombre} eventType={item.categoria} eventDate={item.fecha_del_evento} eventHour={item.hora_del_evento} eventLocation={item.distrito} onPress={ (event) => this.onPressItem(event)}/>}
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

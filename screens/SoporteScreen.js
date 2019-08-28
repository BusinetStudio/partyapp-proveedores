import React,{Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles/styles';
import Header from './Header'


export default class SoporteScreen extends Component {

  render() {  
    return (
      <View style={{flex:1}}>
         <Header {...this.props} menu={true}/>
        <ScrollView style={{paddingHorizontal:40}}>
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Soporte</Text>
          <Text style={styles.questionTitle}>Nuestra cobertura</Text>
          <Text style={styles.questionDescription}>Actualmente PartyApp opera en todos los distritos de la ciudad de Lima </Text>
          <Text style={styles.questionTitle}>Quiero ser proveedor de PartyApp</Text>
          <Text style={styles.questionDescription}>Muchas gracias por tu interés en PartyApp{"\n"}Por favor envíanos un correo a @partyapp.com{"\n"}Nos pondremos en contacto lo antes posible</Text>          
          <Text style={styles.questionTitle}>Cómo pedir un servicio para mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Solicita a un proveedor específico</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Con cuanto tiempo de anticipación debo cotizar mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Puedo cotizar un servicio para dentro de 2 días</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Quiero contactar al proveedor de mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como cancelar mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Quiero ver el presupuesto total de mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Quiero ver el presupuesto de un servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que beneficios obtengo con PartyApp Prime</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo ser miembro de PartyApp Prime</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como cotizar un servicio para mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que pasa si quiero modificar mi servicio una vez que ya recibí cotizaciones</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo aumentar servicios a mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo copiar los detalles de un evento anterior a mi nuevo evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo comunicarme con PartyApp</Text>
          <Text style={styles.questionDescription}>Puedes contactarnos llamando a Servicio al Cliente{"\n"}O escríbenos al correo: informes@partyapp.com</Text>          
        </ScrollView>
      </View>
    )
  }
}
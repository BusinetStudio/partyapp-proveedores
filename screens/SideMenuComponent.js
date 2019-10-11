import React,{Component} from 'react';
import { Text, View, FlatList, TouchableOpacity, AsyncStorage,ScrollView, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/styles';
import SideMenuHeader from './SideMenuHeaderComponent'
import Authentication from '../modules/authentication'
import EventEmitter from '../modules/eventEmiter'

const sideMenuList = [
    {id: "1", name: 'Actualizar empresa', navigationName: 'ActualizarEmpresa'},
    {id: "2", name: 'Cambiar Contraseña', navigationName: 'CambiarContrasena'},
    {id: "3", name: 'Preguntas Frecuentes', navigationName: 'PreguntasFrecuentes'},
    {id: "4", name: 'Términos y Condiciones', navigationName: 'TerminosCondiciones'},
    {id: "5", name: 'Soporte', navigationName: 'Soporte'},
    {id: "6", name: 'Cerrar Sesión', navigationName: 'logout'},
]


export default class SideMenuComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : 'Nombre de Usuario'
        }
        this.eventRefresh = EventEmitter.addListener('refreshUser', () => {
            this.refreshUser()
          }
        )
    }

    async componentDidMount(){
        await Authentication.currentToken().then((auth) => {
            if (auth) {
              this.setState({
                  username: auth.nombreEmpresa
              })
            }
        })
    }

    //navigation to screens from side menu
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    //sign out and clear all async storage
    async signOut() {
        AsyncStorage.clear()
        this.props.navigation.navigate('Home')
    }

    async refreshUser(){
        await Authentication.currentToken().then((auth) => {
            if (auth) {
              this.setState({
                  username: auth.nombreEmpresa
              })
            }
        })
    }

    render(){
        return (
            <View style={{backgroundColor:'#fff',height: '100%'}}>
                <SideMenuHeader onPress={this.navigateToScreen("Solicitudes") } headerStyle={styles.menuHeader} 
                    userName ={this.state.username}></SideMenuHeader>
                <ScrollView>
                    <FlatList data={sideMenuList}
                        keyExtractor={(item,index) => item.id}
                        style={{ marginTop: 10}}
                        bounces = {false}
                        renderItem={({item, index}) =>
                            <TouchableOpacity
                                onPress={(item.navigationName=='logout')? ()=>this.signOut() : this.navigateToScreen(item.navigationName)}>
                                <Text style={styles.menuName}>{item.name}</Text>
                            </TouchableOpacity>
                        }>
                    </FlatList>
                </ScrollView>
            </View>
        )
    }
}


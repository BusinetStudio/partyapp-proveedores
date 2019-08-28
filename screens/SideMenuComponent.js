import React,{Component} from 'react';
import { Text, View, FlatList, TouchableOpacity, AsyncStorage,ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/styles';


const sideMenuList = [
    {id: "1", name: 'Actualizar empresa', navigationName: 'ActualizarEmpresa'},
    {id: "2", name: 'Cambiar Contrasena', navigationName: 'CambiarContrasena'},
    {id: "3", name: 'Sign Out', navigationName: '', icon: 'exit-to-app', type: 'material'},
]


export default class SideMenuComponent extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        
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
        this.props.navigation.navigate('Home')
    }

    render(){
        return (
            <View style={{backgroundColor:'#fff',height: '100%'}}>
                <ScrollView>
                    <FlatList data={sideMenuList}
                        keyExtractor={(item,index) => item.id}
                        style={{ marginTop: 10}}
                        bounces = {false}
                        renderItem={({item, index}) =>
                            <TouchableOpacity
                                onPress={(item.name=='Sign Out')? ()=>this.signOut() : this.navigateToScreen(item.navigationName)}>
                                <Text style={styles.menuName}>{item.name}</Text>
                            </TouchableOpacity>
                        }>
                    </FlatList>
                </ScrollView>
            </View>
        )
    }
}


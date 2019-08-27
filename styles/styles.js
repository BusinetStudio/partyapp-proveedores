import { StyleSheet } from 'react-native';
export default StyleSheet.create({
      
      //HomeScreen
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        marginTop: 25,
        marginBottom: 50,
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
      
        //RegisterScreen //LoginScreen
    loginContainer: { 
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    
    inputElement: {
        marginBottom: 10,
        padding: 10,
        marginLeft: 35,
        marginRight:35,
        borderWidth: 1,
        borderColor: '#78B7B6',
        borderRadius: 6
    },
      //Button, TextButoon, Title and SubTitle.
    Title:{
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        color:'#8F4D93',
        marginTop:20,
        marginBottom:10
    },
    TitleItem:{
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'left',
        color:'#C63275',
        marginLeft:15,
    },
    SubTitle:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom:5,
        marginLeft:35
    },
    SubTitleItem:{
        marginTop: 5,
        fontSize: 13,
        textAlign: 'left',
        color:'black',
        marginLeft:15,
    },
    DetailItem:{
        marginTop: 5,
        fontSize: 13,
        textAlign: 'right',
        color:'black',
        marginLeft: 35,
    },
    EventTitle:{
        fontSize: 21,
        fontWeight: '700',
        textAlign: 'left',
        color:'black',
        marginLeft: 35,
        marginBottom:5,
    },
    EventDescription:{
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'left',
        color:'black',
        marginLeft: 35,
        marginRight: 35,
        marginBottom:5,
    },
    EventDescriptionParagraf:{
        fontSize:12,
        fontWeight: '300',
        textAlign: 'left',
        color:'black',
        lineHeight:20,
        marginTop:5,
        marginLeft: 35,
        marginRight: 35,
        marginBottom:5,
    },
    EventDescriptionCosto:{
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'left',
        color:'black',
        marginTop:10,
        marginLeft: 35,
        marginRight: 35,
        marginBottom:5,
    },
    EventBorderLine:{
        borderWidth:1,
        borderColor:"#e9e9e9",
        marginBottom:30,
        marginTop:25
    },
    button:{
        marginBottom: 20,
        alignItems: 'center',
        width: 200,
        height:50,
        borderRadius: 25,
        overflow: 'hidden',
    },
    textbutton:{
        marginTop: 14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textcancelar:{
        marginTop: 14,
        color: '#333',
        fontWeight: 'bold',
        fontSize: 20,
  },
});
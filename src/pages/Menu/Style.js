import { StyleSheet } from "react-native";

const styleMenu = StyleSheet.create({
    btnsMenu: {
        marginTop: 40,
        height: '100%',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    btn1: {
        width: 150,
        height: 150,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 10,
        elevation: 20,
        justifyContent: 'center'
    },
    textWhite: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    textWhiteTitulo: {
        color: 'white',
        fontSize: 35,
        padding: 10
    },
    textBlack: {
        color: 'black',
        fontSize: 35,
        textAlign: 'center'
    },
    iconBtn: {
        alignSelf: 'center',
        color: 'white',
    },
    cardBtn: {
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    textBtn: {
        fontSize: 30,
        color: '#15A5D3',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 4},
        textAlign: 'center'
    },
    boxTituloBtn:{
        justifyContent: 'center',
        flex: 1
    }
})

export default styleMenu;
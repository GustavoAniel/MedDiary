import { StyleSheet } from "react-native";

const styleMenu = StyleSheet.create({
    btnsMenu: {
        marginTop: 40,

    },
    btn1: {
        width: 150,
        height: 150,
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 10,
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
    },
    textBlack: {
        color: 'black',
        fontSize: 35,
        textAlign: 'center'
    },
    iconBtn: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 20
    }
})

export default styleMenu;
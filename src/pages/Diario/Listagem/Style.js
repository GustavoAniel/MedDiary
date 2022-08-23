import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#1d4ed8'
    },
    boxForm: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center'
    },
    textTitulo: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        marginVertical: 25,
        fontWeight: 'bold'
    },

    barraMes: {
        backgroundColor: 'white',
        padding: 2,
        marginTop: 15,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
    },
    boxText: {
    },
    textMes: {
        color: '#51E495',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boxIcon: {
        flex: 1,
        justifyContent: 'center',
    },  
    arrowIcon: {
        color: '#BEACAC'
    },
    groupCards: {
        flex: 1,
        alignItems: 'center'
    },
    iconeTag: {
        alignSelf: 'center',
        color:'white'
    },
})

export default style;
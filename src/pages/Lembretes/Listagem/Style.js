import { StyleSheet } from "react-native";

const styleLembrete = StyleSheet.create({
    groupCards: {
        flex: 1,
        alignItems: 'center'
    },
    textTitulo: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        marginVertical: 25,
        fontWeight: 'bold'
    },
    btnAdd: {
        width: 60,
        height: 60,
        marginVertical: 5,
        marginRight: 15,
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 50
    }
})

export default styleLembrete;
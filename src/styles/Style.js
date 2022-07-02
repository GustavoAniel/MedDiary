import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const gradient = {
    linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}
}

const style = StyleSheet.create({
    background: {
      backgroundColor: '#032cfc',
      flex: 1,
    },
    text: {
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold'
    },
    textBranco: {
        color: 'white',
      },
    card: {
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 20,
    }
})

const styleLembrete = StyleSheet.create({
  groupCards: {
    flex: 1,
    alignItems: 'center'
},
card: {
    backgroundColor: 'white',
    width: '90%',
    height: 150,
    shadowOffset: { width: 10, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 1,

    elevation: 23,
    flexDirection: 'row',
    marginVertical: 10
},
textTitulo: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 25,
    fontWeight: 'bold'
},
tagCard: {
    width: '13%',
    height: '100%',
    justifyContent: 'center'
},
textCardTitulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#535353',
    fontSize: 15,

},
iconGeral: {
    flexDirection: 'row'
},

textIcons: {
    color: '#ACACAC'
},

textDisc: {
    color: '#BEACAC',
    alignSelf: 'center',
    marginTop: 15
},
iconeTag: {
    alignSelf: 'center',
    color:'white'
},
infoCard: {
    flex: 1
},
})

const styleRegistro = StyleSheet.create({
    groupCards: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        width: '90%',
        height: 150,
        shadowOffset: { width: 10, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 1,
    
        elevation: 23,
        flexDirection: 'row',
        marginVertical: 10
    },   
    textTitulo: {
        color: '#535353',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 25,
        fontWeight: 'bold'
    },
    miniCard: {
        flex: 1,
        width: 50,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    iconeTag: {
        alignSelf: 'center',
        color:'white'
    },
})

export {style, styleLembrete, styleRegistro, gradient};
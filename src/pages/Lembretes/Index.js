import { NativeBaseProvider, Box, ScrollView, VStack, Stack, Button } from "native-base";
import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { style } from "../../styles/Style";
import styleLembrete from "./Style";
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import Lembrete from "../../components/Lembrete";

const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}


export default function Lembretes(){
    return(
        <NativeBaseProvider config={config}>
            <Box style={[style.background]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>

                <Box flex={1}>

                    <Text style={[styleLembrete.textTitulo]}>Lembretes</Text>

                    <Box style={[styleLembrete.groupCards]}>
                        
                        

                        <Lembrete tipoLembrete={'remedio'} titulo={'Tomar remédio'} descricao={'Tem que tomar o remédio que o Doutor Gabriel disse.'} periodo={'8 horas'} data={'19/04/2022'}/>

                        <Lembrete titulo={'Mandar mensagem pro Med'} descricao={'Cara, não sei o que colocar de descrição tá, já é mais de meia noite, só estou enrolando esse texto para ver até aonde ele vai.'} periodo={'12 horas'} data={'21/04/2022'}/>

                    </Box>
                    <Button style={[styleLembrete.btnAdd]}><IconIonicons name="add" size={40} color={'#15A5D3'}/></Button>

                </Box>

            </Box>
        </NativeBaseProvider>
    )
    
}
import { Text } from "react-native";
import { styleLembrete } from "../styles/Style";
import { NativeBaseProvider, Box, ScrollView, VStack, Stack, Button } from "native-base";
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import  IconMaterial2  from "react-native-vector-icons/MaterialCommunityIcons";

export default function Lembrete({titulo, descricao, tipoLembrete, data, periodo}){
    return(
        <Box style={[styleLembrete.card]}>
            <Box style={[styleLembrete.tagCard]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                {tipoLembrete == 'remedio' ? <IconAwesome name="capsules" style={[styleLembrete.iconeTag]} size={23} /> : <IconMaterial2 name="bell" style={[styleLembrete.iconeTag]} size={23} />}
            </Box>

            <Box style={[styleLembrete.infoCard]}>
                <Text style={[styleLembrete.textCardTitulo]}>{titulo}</Text>

                <ScrollView>
                    <Text style={[styleLembrete.textDisc]}>{descricao}</Text> 
                </ScrollView>
                
                <Box style={[styleLembrete.icons]}>

                    <VStack >
                        <Stack direction={"row"} justifyContent='space-between'>
                            <Box style={[styleLembrete.iconGeral]}>
                                <IconIonicons name="time-outline" size={20} color={'#ACACAC'}/>
                                <Text style={[styleLembrete.textIcons]}>{periodo}</Text>
                            </Box>
                        
                            <Box style={[styleLembrete.iconGeral]}>
                                <IconMaterial name="date-range" size={20} color={'#ACACAC'} />
                                <Text style={[styleLembrete.textIcons]}>{data}</Text>
                            </Box>
                        </Stack>
                    
                    
                    </VStack>
                </Box>
                
            </Box>

        </Box>
    )
}
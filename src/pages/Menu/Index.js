import { Box, Center, NativeBaseProvider, Pressable, Spacer, VStack, Stack } from "native-base";
import { Text, View } from 'react-native';
import { style, styleLembrete } from "../../styles/Style";
import styleMenu from './Style';
import  IconMaterial  from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome5'
import { LinearGradient } from 'expo-linear-gradient';


const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}

export default function Menu({ navigation: { navigate }}){
    return(
        <NativeBaseProvider config={config}>
            <Box style={[style.background]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}> 

                <Box rounded={5} >
                    <Text style={[styleMenu.textWhiteTitulo]}>Bom dia Fulana!</Text>

                    

                    <Box style={[styleMenu.btnsMenu]}>
                        

                        <Pressable onPress={() => navigate("Listar_Lembretes")}>
                            <Box style={[styleMenu.cardBtn]}>
                                <Box style={[styleMenu.btn1]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                                    <IconMaterial name="bell" size={50} style={[styleMenu.iconBtn]} />
                                </Box>
                                <Box style={[styleMenu.boxTituloBtn]}> 
                                    <Text style={[styleMenu.textBtn]}>Lembretes</Text>
                                </Box>
                            </Box>
                        </Pressable>
                        
                        <Pressable onPress={() => navigate("Listar_Diario")}>
                            <Box style={[styleMenu.cardBtn]}>
                                <Box style={[styleMenu.btn1]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                                    <IconAnt name="book" size={50} style={[styleMenu.iconBtn]} />
                                </Box>
                                <Box style={[styleMenu.boxTituloBtn]}>
                                    <Text style={[styleMenu.textBtn]}>Diário</Text>
                                </Box>
                            </Box>
                        </Pressable>

            
                        <Pressable>
                            <Box style={[styleMenu.cardBtn]}>
                                <Box style={[styleMenu.btn1]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                                    <IconAwesome name="briefcase-medical" size={50} style={[styleMenu.iconBtn]} />
                                </Box>
                                <Box style={[styleMenu.boxTituloBtn]}>
                                    <Text style={[styleMenu.textBtn]}>Medicamentos</Text>
                                </Box>
                            </Box>
                            
                        </Pressable>
                                
                            
                    </Box>
                    
                        

                    
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}
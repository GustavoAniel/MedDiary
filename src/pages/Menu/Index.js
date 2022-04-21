import { Box, Center, NativeBaseProvider, Pressable, Spacer, VStack, Stack } from "native-base";
import { Text, View } from 'react-native';
import { style } from "../../styles/Style";
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
                        <VStack space={10}>              
                            <Stack direction='row' justifyContent='space-between'>

                                <Pressable onPress={() => navigate("Lembretes")}>
                                    <Box style={[styleMenu.btn1]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                                        <Text style={[styleMenu.textWhite]}>Lembretes</Text>

                                        <IconMaterial name="bell" size={40} style={[styleMenu.iconBtn]} />
                                    </Box>
                                </Pressable>
                                
                                <Pressable>
                                    <Box style={[styleMenu.btn1]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                                        <Text style={[styleMenu.textWhite]}>Diário</Text>

                                        <IconAnt name="book" size={40} style={[styleMenu.iconBtn]} />
                                    </Box>
                                </Pressable>

                            </Stack>

                            <Stack direction='row' justifyContent='space-between'>

                            
                                <Box style={[styleMenu.btn1]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>
                                    <Text  style={[styleMenu.textWhite]}>Medicamentos</Text>

                                    <IconAwesome name="briefcase-medical" size={40} style={[styleMenu.iconBtn]} />
                                </Box>

                                
                            </Stack>
                        </VStack>
                    </Box>
                    
                        

                    
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}
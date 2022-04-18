import { Box, Center, NativeBaseProvider, Pressable } from "native-base";
import { Text } from 'react-native';
import style from "../../styles/Style";
import styleMenu from './Style';
import  Icon  from "react-native-vector-icons/Ionicons";


export default function Menu({ navigation: { navigate }}){
    return(
        <NativeBaseProvider>
            <Box style={[style.background]} >
                
                <Pressable onPress={() => navigate("Listar")}>
                    <Box style={[styleMenu.btn1]}>
                        <Icon name="person" size={30} style={{alignSelf: 'center'}} />
                        <Text style={[styleMenu.textWhite]}>Pesquisar</Text>
                    </Box>
                </Pressable>
                
                <Box style={[styleMenu.btn1]}>
                    <Text style={[styleMenu.textWhite]}>Login</Text>
                </Box>

                <Box style={[styleMenu.btn1]}>
                    <Text style={[styleMenu.textWhite]}>Listar Todos</Text>
                </Box>

            </Box>
        </NativeBaseProvider>
    )
}
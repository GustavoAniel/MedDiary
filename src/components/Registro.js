import { NativeBaseProvider, Box, VStack, HStack } from 'native-base';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { style, styleRegistro } from '../styles/Style';

export default function Registro({id, tipo, titulo, descricao, data_criacao}){
    return(
        <Box key={id} style={[styleRegistro.card]}>
            
            <HStack flex={1}>
                <VStack>
                    <Box style={[styleRegistro.miniCard]} bg={gradient}>
                        <Icon name='emoji-happy' size={30} style={[styleRegistro.iconeTag]}/> 
                    </Box>
                </VStack>
                <VStack flex={1}>
                    <Text style={[styleRegistro.textTitulo]}>{titulo}</Text>
                    <Text>{descricao}</Text>
                    <Text>{data_criacao}</Text>
                </VStack>
            </HStack>
            
        </Box>
    )
}

const gradient = {
    linearGradient: {
        colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]
    }
}
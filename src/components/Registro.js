import {
    NativeBaseProvider,
    Box,
    VStack,
    HStack,
    ScrollView,
} from "native-base";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { style, styleRegistro } from "../styles/Style";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { dataRegistro } from "../lib/dataRegistro";

export default function Registro({
    id,
    tipo,
    titulo,
    descricao,
    data_criacao,
}) {
    return (
        <Box key={id} style={[styleRegistro.card]}>
            <HStack flex={1}>
                <VStack>
                    <Box style={[styleRegistro.miniCard]} bg={gradient}>
                        <Icon
                            name="emoji-happy"
                            size={30}
                            style={[styleRegistro.iconeTag]}
                        />
                    </Box>
                </VStack>
                <VStack flex={1} paddingLeft={2}>
                    <Text style={[styleRegistro.textTitulo]}>{titulo}</Text>
                    <ScrollView>
                        <Text style={[styleRegistro.textDesc]}>
                            {descricao}
                        </Text>
                    </ScrollView>
                    <Box style={[styleRegistro.iconGeral]}>
                        <IconIonicons
                            name="time-outline"
                            size={20}
                            color={"#ACACAC"}
                        />
                        <Text style={[styleRegistro.textIcons]}>{dataRegistro(data_criacao)[1]}</Text>
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}

const gradient = {
    linearGradient: {
        colors: ["#15D36D", "#15A5D3"],
        start: [1, 0],
        end: [0, 1],
    },
};

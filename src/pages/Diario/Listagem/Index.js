import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NativeBaseProvider, Box, ScrollView, VStack, Stack, Button, PresenceTransition, Pressable, HStack } from "native-base";
import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { style } from "../../../styles/Style";
import styleDiario from "./Style";
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import Registro from '../../../components/Registro';
import { mesParaTexto } from '../../../lib/mesTexto';


export default function Listar_Lembretes({navigation: {navigate}}){
    var date = new Date();
    let data = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const [mesNum, setMesnum] = useState(data.getMonth()+1);
    const [mesText, setMesText] = useState();


    useEffect(() => {
        let data = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        setMesText(mesParaTexto(mesNum))
    
    },[])

    const trocarMes = (tipo) => {
        if(tipo == 1){
            if(mesNum == 12){
                setMesnum(1)
                setMesText(mesParaTexto(mesNum))
            }else{
                setMesnum(mesNum+1)
                setMesText(mesParaTexto(mesNum))
            }
        }else{
            if(mesNum == 1){
                setMesnum(12)
                setMesText(mesParaTexto(mesNum))
            }else{
                setMesnum(mesNum-1)
                setMesText(mesParaTexto(mesNum))
            }
        }
    }

    return(
        <Box style={[style.background]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>

            <Box flex={1}>

                <Text style={[styleDiario.textTitulo]}>Diário</Text>

                <Box style={[styleDiario.barraMes]}> {/*Barra do mes*/}
                    <HStack justifyContent="space-between" flex={1}>
                        <Pressable onPress={() => trocarMes(0)}>
                            <Box style={[styleDiario.boxIcon]} >
                                <IconMaterial name='arrow-back-ios' size={40} style={[styleDiario.arrowIcon]}/>
                            </Box>
                        </Pressable>

                        <Box style={[styleDiario.boxText]}>
                            <Text style={[styleDiario.textMes]}>{mesText}</Text>
                        </Box>
                        
                        <Pressable onPress={() => trocarMes(1)}>
                            <Box style={[styleDiario.boxIcon]}>
                                <IconMaterial name='arrow-forward-ios' size={40} style={[styleDiario.arrowIcon]}/>
                            </Box>
                        </Pressable>  
                    </HStack>
                                
                </Box>
                <Box style={[styleDiario.groupCards]}>
                    <Registro 
                    id='1' 
                    tipo='' 
                    titulo='Não senti dor nenhuma' 
                    descricao='Fiz uma caminhada no park porque hoje a dor deu uma aliviada' 
                    data_criacao='01/06/2022 21:18' 
                    />
                </Box>

                
            </Box>
        </Box>
    )
    
}

const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}

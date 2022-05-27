import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NativeBaseProvider, Box, ScrollView, VStack, Stack, Button, PresenceTransition, Pressable, HStack } from "native-base";
import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { style } from "../../../styles/Style";
import styleDiario from "./Style";
import IconMaterial from 'react-native-vector-icons/MaterialIcons'


export default function Listar_Lembretes({navigation: {navigate}}){
    var date = new Date();
    let data = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const [mesNum, setMesnum] = useState(data.getMonth()+1);
    const [mesText, setMesText] = useState();


    useEffect(() => {
        let data = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        setMesText(mesParaTexto(mesNum))
    
    },[])

    const mesParaTexto = (mess) => {
        switch(mess){
            case 1:
                return 'Janeiro';
            break;
            case 2:
                return 'Fevereiro';
            break;
            case 3:
                return 'Março';
            break;
            case 4:
                return 'Abril';
            break;
            case 5:
                return 'Maio';
            break;
            case 6:
                return 'Junho';
            break;
            case 7:
                return 'Julho'
            break;
            case 8:
                return 'Agosto'
            break;
            case 9:
                return 'Setembro';
            break;
            case 10:
                return 'Outubro';
            break;
            case 11:
                return 'Novembro';
            break;
            case 12:
                return 'Dezembro';
            break;
        }
    }

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
        <NativeBaseProvider config={config}>
            <Box style={[style.background]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}>

                
                    <Text style={[styleDiario.textTitulo]}>Diário</Text>

                   <Box style={[styleDiario.barraMes]}> {/*Barra do mes*/}
                       <HStack justifyContent="space-between" flex={1}>
                            <Pressable onPress={() => trocarMes(0)}>
                                <Box style={[styleDiario.boxIcon]} >
                                    <IconMaterial name='arrow-back-ios' size={40} style={[styleDiario.arrowIcon]}/>
                                </Box>
                            </Pressable>

                            <Box style={[styleDiario.boxText]}>
                                <Text style={[styleDiario.textMes]} re>{mesText}</Text>
                            </Box>
                            
                            <Pressable onPress={() => trocarMes(1)}>
                                <Box style={[styleDiario.boxIcon]}>
                                    <IconMaterial name='arrow-forward-ios' size={40} style={[styleDiario.arrowIcon]}/>
                                </Box>
                            </Pressable>  
                        </HStack>
                                  
                   </Box>
            </Box>
        </NativeBaseProvider>
    )
    
}

const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}

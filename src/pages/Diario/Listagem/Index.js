import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    NativeBaseProvider,
    Box,
    ScrollView,
    VStack,
    Stack,
    Button,
    PresenceTransition,
    Pressable,
    HStack,
} from "native-base";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "../../../styles/Style";
import styleDiario from "./Style";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Registro from "../../../components/Registro";
import { mesParaTexto } from "../../../lib/mesTexto";
import diaryRegisters from "../../../lib/diaryRegisters.json";
import { dateToMonth } from "../../../lib/dateToMonthNum";
import { toDate } from "../../../lib/toDate";
import { dayExists } from "../../../lib/dayMapExists";

export default function Listar_Lembretes({ navigation: { navigate } }) {
    var date = new Date();
    let data = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const [mesNum, setMesnum] = useState(data.getMonth() + 1);
    const [mesText, setMesText] = useState();

    const [days, setDays] = useState([]);

    useEffect(() => {
        setDays([])
        setMesText(mesParaTexto(mesNum));
    }, []);

    const dayMapExists = (date) => {
        let exist = false
        const newDate = toDate(date).getDate();

        if(dayExists(days, newDate) == false){
            console.log('Existe');
            exist = true;
            days.push(newDate);
        }

        return exist;
    };

    const trocarMes = (tipo) => {
        setDays([])
        if (tipo == 1) {
            if (mesNum == 12) {
                setMesnum(1);
                setMesText(mesParaTexto(1));
            } else {
                setMesnum(mesNum + 1);
                setMesText(mesParaTexto(mesNum + 1));
            }
        } else {
            if (mesNum == 1) {
                setMesnum(12);
                setMesText(mesParaTexto(12));
            } else {
                setMesnum(mesNum - 1);
                setMesText(mesParaTexto(mesNum - 1));
            }
        }
    };

    return (
        <Box
            style={[style.background]}
            bg={{
                linearGradient: {
                    colors: ["#15D36D", "#15A5D3"],
                    start: [1, 0],
                    end: [0, 1],
                },
            }}
        >
            <Box flex={1}>
                <Text style={[styleDiario.textTitulo]}>Diário</Text>

                <Box style={[styleDiario.barraMes]}>
                    {" "}
                    {/*Barra do mes*/}
                    <HStack justifyContent="space-between" flex={1}>
                        <Pressable onPress={() => trocarMes(0)}>
                            <Box style={[styleDiario.boxIcon]}>
                                <IconMaterial
                                    name="arrow-back-ios"
                                    size={40}
                                    style={[styleDiario.arrowIcon]}
                                />
                            </Box>
                        </Pressable>

                        <Box style={[styleDiario.boxText]}>
                            <Text style={[styleDiario.textMes]}>{mesText}</Text>
                        </Box>

                        <Pressable onPress={() => trocarMes(1)}>
                            <Box style={[styleDiario.boxIcon]}>
                                <IconMaterial
                                    name="arrow-forward-ios"
                                    size={40}
                                    style={[styleDiario.arrowIcon]}
                                />
                            </Box>
                        </Pressable>
                    </HStack>
                </Box>
                <ScrollView>
                    <Box style={[styleDiario.groupCards]}>
                        {diaryRegisters.value.map((diary) =>
                            dateToMonth(diary.data_criacao) == mesNum ? (
                                <Registro
                                    key={diary.id}
                                    id={diary.id}
                                    tipo={diary.tipo}
                                    titulo={diary.titulo}
                                    descricao={diary.descricao}
                                    data_criacao={diary.data_criacao}
                                    day_repeat={dayMapExists(diary.data_criacao)}
                                /> 
                            ) : null
                           
                            
                        )}
                    </Box>
                </ScrollView>
            </Box>
        </Box>
    );
}

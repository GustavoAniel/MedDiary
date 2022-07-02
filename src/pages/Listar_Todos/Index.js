import React, { useEffect, useState } from 'react';
import { Box, NativeBaseProvider, Pressable  } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import api from '../../server/api';
import style from './Style';


export default function App({ navigation: { goBack } }){
  const [usuario, setUsuario] = useState();

  useEffect(() => {
      api.get("/user/findById/1")
      .then((response) => setUsuario(response.data))
      .catch((err) => {
        console.error("Ops! ocorreu erro de " + err);
      });
  }, [])

  return(
    <Box style={[style.background]}>
      <Box style={[style.card]}>
        <Text style={[style.text]}>Id: {usuario?.idUsuario}</Text>
        <Text style={[style.text]}>Nome: {usuario?.nomeCompleto}</Text>
        <Text style={[style.text]}>User: {usuario?.username}</Text>
        <Text style={[style.text]}>Senha: {usuario?.password}</Text>
        <Text style={[style.text]}>Data: {usuario?.dataCriacao}</Text>
      </Box>
      
      <Pressable onPress={() => goBack()}>
        <Box style={[style.btn1]}>
          <Text style={[style.textWhite]}>Voltar</Text>
        </Box>
      </Pressable>
      

    </Box>
  )
}


import React, { useEffect, useState } from 'react';
import { Box, NativeBaseProvider  } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/server/api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Listar  from './src/pages/Listar_Todos/Index';
import Menu from './src/pages/Menu/Index';
import Login from './src/pages/Usuario/Login/Index';
import Listar_Lembretes from './src/pages/Lembretes/Listagem/Index';
import Cadastrar_Lembretes from './src/pages/Lembretes/Cadastro/Index';
import Listar_Diario from './src/pages/Diario/Listagem/Index';
import {SSRProvider} from '@react-aria/ssr';
import { LinearGradient } from 'expo-linear-gradient';
import Cadastrar_Usuario from './src/pages/Usuario/Cadastro/Index';

const Stack = createStackNavigator();

const config = {
  dependencies: {
      "linear-gradient" : LinearGradient
  }
}

export default function App(){
  return(
    <NativeBaseProvider config={config}>
      <SSRProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastrar_Usuario' component={Cadastrar_Usuario}/>
            <Stack.Screen name='Listar' component={Listar} />
            <Stack.Screen name='Menu' component={Menu} />
            <Stack.Screen name="Listar_Lembretes" component={Listar_Lembretes} />
            <Stack.Screen name='Cadastrar_Lembretes' component={Cadastrar_Lembretes} />
            <Stack.Screen name='Listar_Diario' component={Listar_Diario} />
          </Stack.Navigator>
        </NavigationContainer>
      </SSRProvider>
    </NativeBaseProvider>
  )
}

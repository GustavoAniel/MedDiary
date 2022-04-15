import React, { useEffect, useState } from 'react';
import { Box, NativeBaseProvider  } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import api from './src/server/api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Listar  from './src/pages/Listar_Todos/Index';
import Menu from './src/pages/Menu/Index';

const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Listar' component={Listar} />
        <Stack.Screen name='Menu' component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
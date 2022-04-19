import React, { useState } from 'react';
import { NativeBaseProvider, Box, ScrollView, Stack, Input, FormControl, Divider, Center, Button, Image } from "native-base";
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './Style';

const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}

export default function Login({ navigation: { navigate }}){
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    function logar(login, senha){
        if(login == '' || senha == ''){
            console.log('Está nulo amigão!')
        }else{

        }
    }

    return(
        <NativeBaseProvider config={config}>
            <Box style={[style.background]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}> 
                <Box style={[style.boxForm]} p={5} rounded={5} >
                    <Center>
                        <Image w={40} h={40}  source={require('../../../assets/logo-meddiary.png')} />
                    </Center>

                    <FormControl isRequired>
                        <Stack mx="4" safeArea space={10}>

                            <Box>
                                <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Usuário</FormControl.Label>
                                <Input color='white' variant='underlined' type="login" onChangeText={(login) => setLogin(login)} />
                                <FormControl.ErrorMessage >
                                    Atleast 6 characters are required.
                                </FormControl.ErrorMessage>
                            </Box>
                            
                            <Box>
                                <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Senha</FormControl.Label>
                                <Input color='white' variant='underlined' type="password" onChangeText={(senha) => setSenha(senha)} />
                                <FormControl.ErrorMessage >
                                    Atleast 6 characters are required.
                                </FormControl.ErrorMessage>
                            </Box>
                            
                            <Box alignItems="center">
                                <Button backgroundColor={'#15D36D'} size={'lg'} onPress={() => navigate("Menu")}>Logar</Button>
                            </Box>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}


import React, { useState } from 'react';
import { NativeBaseProvider, Box, ScrollView, Stack, Input, FormControl, Divider, Center, Button } from "native-base";
import { StyleSheet } from 'react-native';

export default function Login(){
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    function logar(){

    }

    return(
        <NativeBaseProvider>
            <Box style={[style.background]}> 
                <Box style={[style.boxForm]}>
                    <FormControl isRequired>
                        <Stack mx="4" safeArea space={10}>

                            <Box>
                                <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Usuário</FormControl.Label>
                                <Input variant='underlined' type="login" />
                                <FormControl.ErrorMessage >
                                    Atleast 6 characters are required.
                                </FormControl.ErrorMessage>
                            </Box>
                            
                            <Box>
                                <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Senha</FormControl.Label>
                                <Input variant='underlined' type="password"  />
                                <FormControl.ErrorMessage >
                                    Atleast 6 characters are required.
                                </FormControl.ErrorMessage>
                            </Box>
                            
                            <Box alignItems="center">
                                <Button size={'lg'} onPress={() => console.log("hello world")}>Logar</Button>
                            </Box>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}


const style = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1d4ed8'
    },
    boxForm: {
        width: '100%',
        maxWidth: 300,
        alignSelf: 'center'
    }
})
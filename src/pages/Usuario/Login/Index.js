import React, { useState } from 'react';
import { NativeBaseProvider, Box, ScrollView, Stack, Input, FormControl, Divider, Center, Button, Image, Alert, VStack, HStack, CloseIcon, IconButton, Modal } from "native-base";
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './Style';
import UsuarioController from '../../../controller/UsuarioController'

const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}

export default function Login({ navigation: { navigate }}){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);

    function logar(login, senha){
        if(login == '' || senha == ''){
            setShow(true)
        }else{
           UsuarioController.buscarNome(login)
        }
    }

    return(
        <NativeBaseProvider config={config}>
            <Box style={[style.background]} bg={{ linearGradient: {colors: ['#15D36D', '#15A5D3'], start: [1, 0], end: [0, 1]}}}> 
                <Box style={[style.boxForm]} p={5} rounded={5} >
                    <Center>
                        <Image w={40} h={40} alt='Logo da Med Diary' source={require('../../../../assets/logo-meddiary.png')} />
                    </Center>

                    <FormControl>
                        <Stack mx="4" safeArea space={10}>

                            <Box>
                                <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Usuário</FormControl.Label>
                                <Input color='white' variant='underlined' type="login" onChangeText={(login) => setLogin(login)} />
                                <FormControl.ErrorMessage >
                                   Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>
                            
                            <Box>
                                <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Senha</FormControl.Label>
                                <Input color='white' variant='underlined' type="password" onChangeText={(senha) => setSenha(senha)} />
                                <FormControl.ErrorMessage >
                                    Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>
                            
                            <Box alignItems="center">
                                <Button backgroundColor={'#15D36D'} style={[style.btnLogin]} onPress={() => logar(login, senha)}>Logar</Button>
                            </Box>
                        </Stack>
                    </FormControl>
                    
                </Box>
                <Modal isOpen={show} onClose={()=> setShow(false)}>
                    <Center>
                        <Alert w="100%" maxW="400" status="error">
                            <VStack space={1} flexShrink={1} w="100%">
                                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                                    <HStack flexShrink={1} space={2} alignItems="center">
                                    <Alert.Icon />
                                    <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                                        Preencha os campos!
                                    </Text>
                                    </HStack>
                                    <IconButton onPress={()=> setShow(false)} variant="unstyled" _focus={{borderWidth: 0}} icon={<CloseIcon size="3" color="coolGray.600" />} />
                                </HStack>
                            </VStack>
                        </Alert>
                    </Center>
                </Modal>
            </Box>
            
            
        </NativeBaseProvider>
    )
}



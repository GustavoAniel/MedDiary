import React, { useState } from 'react';
import { NativeBaseProvider, Box, Stack, Input, FormControl, Divider, Center, Button, Image, TextArea, Radio, Select } from "native-base";
import { StyleSheet, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './Style';

const config = {
    dependencies: {
        "linear-gradient" : LinearGradient
    }
}

export default function Cadastrar_Lembretes({ navigation: { navigate, goBack }}){
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
                <ScrollView>
                    <Box style={[style.boxForm]} p={5} rounded={5} >
                        <Text style={[style.textTitulo]}>Cadastrar Lembrete</Text>
                        

                        
                        <FormControl >
                            <Stack mx="4" safeArea space={10}>

                                <Box>
                                    <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Título</FormControl.Label>
                                    <Input color='white' />
                                    <FormControl.HelperText _android={{_text:{color: '#DCDCDC'}}}>
                                        Insira o nome desse lembrete.
                                    </FormControl.HelperText>
                                    <FormControl.ErrorMessage >
                                        Atleast 6 characters are required.
                                    </FormControl.ErrorMessage>
                                </Box>
                                
                                <Box>
                                    <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Períodicidade</FormControl.Label>

                                    <Select color={'white'} _light>
                                        <Select.Item label='A cada hora'/>
                                        <Select.Item label='A cada dia' />
                                        <Select.Item label='A cada semana' />
                                        <Select.Item label='Para sempre' />
                                    </Select>

                                    <FormControl.HelperText _android={{_text:{color: '#DCDCDC'}}}>
                                        Insira o nome desse lembrete.
                                    </FormControl.HelperText>

                                </Box>

                                <Box>
                                    <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Horário</FormControl.Label>
                                    <Input color='white' />
                                    <FormControl.HelperText _android={{_text:{color: '#DCDCDC'}}}>
                                    Escolha que horas você quer se lembrar.
                                    </FormControl.HelperText>
                                    <FormControl.ErrorMessage >
                                        Atleast 6 characters are required.
                                    </FormControl.ErrorMessage>
                                </Box>

                                <Box>
                                    <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Descrição</FormControl.Label>
                                    <TextArea color='white' />
                                    <FormControl.HelperText _android={{_text:{color: '#DCDCDC'}}}>
                                        Descreva mais sobre o lembrete.
                                    </FormControl.HelperText>
                                    <FormControl.ErrorMessage >
                                        Atleast 6 characters are required.
                                    </FormControl.ErrorMessage>
                                </Box>

                                <Box>
                                    <FormControl.Label _android={{_text:{color: 'white', fontSize: 20}}}>Categoria</FormControl.Label>
                                    <Radio.Group>
                                        <Radio value='1' my={1} _android={{_text:{color: 'white'}}} colorScheme='primary'>Lembrete</Radio>
                                        <Radio value='2' my={1}  _android={{_text:{color: 'white'}}} colorScheme='primary'>Remédio</Radio>
                                    </Radio.Group>
                                    
                                </Box>
                                
                                <Box flexDirection={'row'} justifyContent={'space-between'}>
                                    <Button borderColor={'white'} borderWidth={1} backgroundColor={'#51E495'} size={'lg'} >Salvar</Button>


                                    <Button borderColor={'white'} borderWidth={1} backgroundColor={'transparent'} size={'lg'} onPress={()=> goBack()}>Cancelar</Button>
                                </Box>
                            </Stack>
                        </FormControl>
                    
                    </Box>
                </ScrollView>
            </Box>
        </NativeBaseProvider>
    )
}


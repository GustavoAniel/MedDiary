import {
    Box,
    Image,
    Center,
    FormControl,
    Stack,
    Input,
    Button,
    ScrollView,
    HStack,
} from "native-base";
import { Text } from "react-native";
import { gradient, style } from "../../../styles/Style";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import styleForm from "./Style";
import { useState } from "react";

export default function Cadastro({navigation: {goBack}}) {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        cpf: '',
        usuario: '',
        senha: ''
    });

    // const [nome, setNome] = useState();
    // const [email, setEmail] = useState();
    // const [cpf, setCpf] = useState();
    // const [usuario, setUsuario] = useState();
    // const [senha, setSenha] = useState();

    const handleSubmit = () => {
        console.log(form);
    }

    return (
        <Box style={[style.background]} bg={gradient}>
            <Box style={[styleForm.boxForm]} p={5} rounded={5}>
                <ScrollView>
                    <Center marginTop={5}>
                        <IconAwesome
                            size={100}
                            alt="Logo da Med Diary"
                            name="user-o"
                            color={"#fff"}
                        />
                        <Text style={[styleForm.textTitulo]}>Cadastrar</Text>
                    </Center>

                    <FormControl>
                        <Stack mx="4" safeArea space={14}>
                            <Box>
                                <FormControl.Label
                                    _android={{
                                        _text: { color: "white", fontSize: 20 },
                                    }}
                                >
                                    Nome Completo
                                </FormControl.Label>
                                <Input
                                    color="white"
                                    variant="underlined"
                                    type="login"
                                    onChangeText={(evt) => setForm({nome: evt.target.value})}
                                />
                                <FormControl.ErrorMessage>
                                    Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>

                            <Box>
                                <FormControl.Label
                                    _android={{
                                        _text: { color: "white", fontSize: 20 },
                                    }}
                                >
                                    Email
                                </FormControl.Label>
                                <Input
                                    color="white"
                                    variant="underlined"
                                    type="email"
                                    onChangeText={(evt) => setForm({email: evt.target.value})}
                                />
                                <FormControl.ErrorMessage>
                                    Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>

                            <Box>
                                <FormControl.Label
                                    _android={{
                                        _text: { color: "white", fontSize: 20 },
                                    }}
                                >
                                    CPF
                                </FormControl.Label>
                                <Input
                                    color="white"
                                    variant="underlined"
                                    type="text"
                                    onChangeText={(evt) => setForm({cpf: evt.target.value})}
                                />
                                <FormControl.ErrorMessage>
                                    Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>

                            <Box>
                                <FormControl.Label
                                    _android={{
                                        _text: { color: "white", fontSize: 20 },
                                    }}
                                >
                                    Usuário
                                </FormControl.Label>
                                <Input
                                    color="white"
                                    variant="underlined"
                                    type="text"
                                    onChangeText={(evt) => setForm({usuario: evt.target.value})}
                                />
                                <FormControl.ErrorMessage>
                                    Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>

                            <Box>
                                <FormControl.Label
                                    _android={{
                                        _text: { color: "white", fontSize: 20 },
                                    }}
                                >
                                    Senha
                                </FormControl.Label>
                                <Input
                                    color="white"
                                    variant="underlined"
                                    type="password"
                                    onChangeText={(evt) => setForm({senha: evt.target.value})}
                                />
                                <FormControl.ErrorMessage>
                                    Não foi possível
                                </FormControl.ErrorMessage>
                            </Box>

                            <Box alignItems="center">
                                <Button
                                    backgroundColor={"#15D36D"}
                                    style={[styleForm.btnLogin]}
                                    onPress={() => null}
                                >
                                    Cadastrar
                                </Button>
                            </Box>

                            <Box alignItems="center">
                                <Button
                                    backgroundColor={"transparent"}
                                    style={[styleForm.btnCad]}
                                    onPress={() => goBack()}
                                >
                                    Cancelar
                                </Button>
                            </Box>
                        </Stack>
                    </FormControl>
                </ScrollView>
            </Box>
        </Box>
    );
}

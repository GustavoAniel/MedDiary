import React, { useState } from "react";
import {
    NativeBaseProvider,
    Box,
    ScrollView,
    Stack,
    Input,
    FormControl,
    Divider,
    Center,
    Button,
    Image,
    Alert,
    VStack,
    HStack,
    CloseIcon,
    IconButton,
    Modal,
    Spinner,
    Heading,
} from "native-base";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./Style";
import { gradient } from "../../../styles/Style";
import UsuarioController from "../../../controller/UsuarioController";
import api from "../../../server/api";

const config = {
    dependencies: {
        "linear-gradient": LinearGradient,
    },
};

const configapi = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJndWdhIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9QQVRJRU5UIn1dLCJpYXQiOjE2NTM3NTYzNjQsImV4cCI6MTY1NjM4NjE2NH0.7cfRM644JmER1T0_U-jZb2WDfZhkrbC0EZc5I1K1BSE",
    },
};

export default function Login({ navigation: { navigate } }) {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [show, setShow] = useState(false);
    const [mensagemErro, setMensagemErro] = useState("");

    const [carregando, setCarregando] = useState(false);

    function logar(login, senha) {
        setCarregando(true);
        if (login == "" || senha == "") {
            setCarregando(false);
            setMensagemErro("Prencha os campos");
            setShow(true);
        } else {
            api.post(`/users/signin?password=${senha}&username=${login}`)
                .then((response) => {
                    setCarregando(false);
                    navigate("Menu"); //Em vez de navigate, talvez um reset para que o usuário não possa voltar para o login de novo
                })
                .catch((err) => {
                    setCarregando(false);
                    if (err.message == "Request failed with status code 500") {
                        setMensagemErro("Usuário não encontrado");
                        setShow(true);
                    }
                });
        }
    }

    return (
        <Box style={[style.background]} bg={gradient}>
            <Box style={[style.boxForm]} p={5} rounded={5}>
                <Center>
                    <Image
                        w={40}
                        h={40}
                        alt="Logo da Med Diary"
                        source={require("../../../../assets/logo-meddiary.png")}
                    />
                </Center>

                <FormControl>
                    <Stack mx="4" safeArea space={10}>
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
                                type="login"
                                onChangeText={(login) => setLogin(login)}
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
                                onChangeText={(senha) => setSenha(senha)}
                            />
                            <FormControl.ErrorMessage>
                                Não foi possível
                            </FormControl.ErrorMessage>
                        </Box>

                        <Box alignItems="center">
                            <Button
                                backgroundColor={"#15D36D"}
                                style={[style.btnLogin]}
                                onPress={() => logar(login, senha)}
                            >
                                Logar
                            </Button>
                        </Box>

                        <Box alignItems="center">
                            <Button
                                backgroundColor={"transparent"}
                                style={[style.btnCad]}
                                onPress={() => navigate("Cadastrar_Usuario")}
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Stack>
                </FormControl>
            </Box>
            <Modal isOpen={show} onClose={() => setShow(false)}>
                <Center>
                    <Alert w="100%" maxW="400" status="error">
                        <VStack space={1} flexShrink={1} w="100%">
                            <HStack
                                flexShrink={1}
                                space={2}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <HStack
                                    flexShrink={1}
                                    space={2}
                                    alignItems="center"
                                >
                                    <Alert.Icon />
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        color="coolGray.800"
                                    >
                                        {mensagemErro}
                                    </Text>
                                </HStack>
                                <IconButton
                                    onPress={() => setShow(false)}
                                    variant="unstyled"
                                    _focus={{ borderWidth: 0 }}
                                    icon={
                                        <CloseIcon
                                            size="3"
                                            color="coolGray.600"
                                        />
                                    }
                                />
                            </HStack>
                        </VStack>
                    </Alert>
                </Center>
            </Modal>

            <Modal isOpen={carregando}>
                <HStack space={2} justifyContent="center">
                    <Spinner
                        color="white"
                        accessibilityLabel="Loading posts"
                        size={40}
                    />
                    <Heading color="white" fontSize={40}>
                        Carregando
                    </Heading>
                </HStack>
            </Modal>
        </Box>
    );
}

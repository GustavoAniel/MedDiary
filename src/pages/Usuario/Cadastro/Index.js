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
import fields from "../../../lib/fieldsFormCad.json";

export default function Cadastro({ navigation: { goBack } }) {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        cpf: "",
        usuario: "",
        senha: "",
    });

    const handleSubmit = () => {
        console.log(form);
    };

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
                            {fields.value.map((field) => (
                                <Box key={field.id}>
                                    <FormControl.Label
                                        _android={{
                                            _text: {
                                                color: "white",
                                                fontSize: 20,
                                            },
                                        }}
                                    >
                                        {field.name}
                                    </FormControl.Label>
                                    <Input
                                        color="white"
                                        variant="underlined"
                                        type={field.type}
                                        onChangeText={(evt) =>
                                            setForm({
                                                [field.id]: evt.target.value,
                                            })
                                        }
                                    />
                                    <FormControl.ErrorMessage>
                                        Não foi possível
                                    </FormControl.ErrorMessage>
                                </Box>
                            ))}

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

import api from "../server/api";

const buscarNome = (usuario) => {
    let usr = ''
    api.get(`/user/findUsuarioByUsername/${usuario}`)
      .then((response) => {usr = response.data})
      .catch((err) => {
        console.error("Ops! ocorreu erro de " + err);
    });

    console.log(usr)
}

export default {buscarNome}
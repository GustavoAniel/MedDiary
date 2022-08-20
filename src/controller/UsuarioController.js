import api from "../server/api";

const config = {
  headers: { Authorization: "Bearer " }
}
const buscarNome = (usuario) => {
    api.get(`/users/${usuario}`, config)
      .then((response) =>  {return response.data})
      .catch((err) => {
        console.error("Ops! ocorreu erro de " + err);
    });
}

const singin = (usuario, senha) => {
  let result = true
  api.post(`/users/signin?password=${senha}&username=${usuario}`)
    .then((response) => {console.log(response.data)})
    .catch((err) => {return false});
}

export default {buscarNome, singin}

import api from "../server/api";

const config = {
  headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJndWdhIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9QQVRJRU5UIn1dLCJpYXQiOjE2NTM3NTYzNjQsImV4cCI6MTY1NjM4NjE2NH0.7cfRM644JmER1T0_U-jZb2WDfZhkrbC0EZc5I1K1BSE" }
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
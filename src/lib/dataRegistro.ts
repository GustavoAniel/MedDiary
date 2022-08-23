import { dayWeek } from "./dayWeek";
import { monthDate } from "./monthDate";

export const dataRegistro = (data: string): any => {
    const newData = data.split(' ')[0].split('/');
    
    const dia = Number(newData[0]);
    const mes = Number(newData[1]);
    const ano = Number(newData[2]);

    const dateNow = new Date(ano, mes, dia);

    const dateRegister = dayWeek(dateNow.getDay()) + ', ' + dateNow.getDate() + ' de ' + monthDate(dateNow.getMonth()-1)

    return dateRegister;
}
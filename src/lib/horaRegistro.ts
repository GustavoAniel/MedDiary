export const horaRegistro = (data: string): string => {
    const newHora = data.toString().split(' ')[1];

    return newHora;
}
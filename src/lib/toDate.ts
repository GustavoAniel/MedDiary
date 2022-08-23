export const toDate = (data: string): Date => {
    
    const newData = data.split(' ')[0].split('/');
    
    const dia = Number(newData[0]);
    const mes = Number(newData[1]);
    const ano = Number(newData[2]);

    const dateNow = new Date(ano, mes, dia);

    return dateNow;
}
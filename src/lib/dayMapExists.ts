export const dayExists = (numbers: number[], number: number): boolean => {
    let exists = false;
    numbers.forEach(num => {
        if(num == number){
            exists = true;
        }
    });

    return exists;
}
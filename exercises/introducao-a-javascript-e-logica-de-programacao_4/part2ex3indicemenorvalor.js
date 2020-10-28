function menorVal (array){
    let menor = 0;
    for(key in array){
        if(array[key] < array[menor]){
            menor = key;
        }
    }
    return menor;
}

let test = [2, 4, 6, 7, 10, 0 , -3];

console.log(menorVal(test));
function maiorVal (array){
    let maior = 0;
    for(key in array){
        if(array[key] > array[maior]){
            maior = key;
        }
    }
    return maior;
}

let test = [2, 3, 6, 7, 10, 1];

console.log(maiorVal(test));
function contaArray(numero, numeros){
    cont = 0;
    for(key in numeros){
        if(numeros[key] === numero){
            cont += 1;
        }
    }
    return cont;
}

function numRepete(numeros){
    let elemento = numeros[0];

    for(let key in numeros){
        if(contaArray(numeros[key], numeros) > contaArray(elemento, numeros)){
            elemento = numeros[key];
        }
    }
    return elemento;
}

let test = [2, 3, 2, 5, 8, 2, 3];

console.log(numRepete(test));
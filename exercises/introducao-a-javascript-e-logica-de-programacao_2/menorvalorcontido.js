let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for(let n = 0; n < numbers.length; n++) {
    if(numbers[n] < menorValor){
        menorValor = numbers[n]
    }
}

console.log(menorValor);
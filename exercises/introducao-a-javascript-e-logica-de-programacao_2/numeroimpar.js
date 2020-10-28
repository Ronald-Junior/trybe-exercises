let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = [];

for(let n = 0; n < numbers.length; n++) {
    if(numbers[n]%2 != 0) {
        impar.push(numbers[n])
    }
}

if(impar.length == 0){
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(impar);
} 
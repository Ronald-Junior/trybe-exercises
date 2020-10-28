function maiorNome (nomes){
    maior = nomes[0];
    for(key in nomes){
        if(nomes[key].length > maior.length){
            maior = nomes[key];
        }
    }
    return maior;
}

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(test));
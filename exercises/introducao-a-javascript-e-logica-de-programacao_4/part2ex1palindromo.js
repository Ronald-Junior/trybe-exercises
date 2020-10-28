function palindromo(word){
    let i = 0;
    for(pos in word){
        if(word[pos] === word[word.length - pos -1]){
            i += 1;
        } else{
            break;
        }
    }
    if(i === word.length){
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
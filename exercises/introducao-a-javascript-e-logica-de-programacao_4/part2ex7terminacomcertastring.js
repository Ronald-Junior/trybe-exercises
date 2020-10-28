function verEndPalavra(word, ending){
    let cont = 0;
    for(key in ending){
        if(ending[ending.length - key - 1] === word[word.length - key - 1]){
            cont += 1;
        } else {
            break;
        }
    }
    if (cont === ending.length){
        return true;
    } else {
        return false;
    }
}

console.log(verEndPalavra("trybe", "be"));
console.log(verEndPalavra("joaofernando", "fernan"));
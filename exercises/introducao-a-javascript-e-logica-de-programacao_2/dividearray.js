let array = [];

for(let n = 1; n <= 25; n++) {
    array.push(n);
}

let arrayDiv = [];

for(let n = 0; n <= array.length; n++) {
    arrayDiv.push(array[n]/2);
}

console.log(arrayDiv);
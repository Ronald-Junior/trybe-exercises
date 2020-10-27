let n = 5;
let trianguloContra = "";

for (let l = 1; l <= n; l += 1) {
  trianguloContra = "";
  for (let c = n; c > l; c -= 1) {
  trianguloContra += " ";
  }
  for (let ast = 1; ast <= l; ast += 1){
  trianguloContra += "*";
  }
  console.log(trianguloContra)
}
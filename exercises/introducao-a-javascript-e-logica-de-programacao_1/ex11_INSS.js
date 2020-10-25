let sal = 4000;

let inss = 0;
let ir = 0;
let parcela = 0;

if (sal <= 1556.94) {
  inss = sal* (8/100);
}
else if (sal <= 2594.92) {
  inss =  sal* (9/100);
}
else if (sal <= 5189.82) {
  inss = sal* (11/100);
}
else {
  inss = 570.88;
}

let salBase = sal - inss;

if (salBase < 1903.98) {
  ir = 0
}
else if (salBase <= 2826.65) {
  ir = salBase* (7.5/100);
  parcela = 142.80;
}
else if (salBase <= 3751.05) {
  ir = salBase* (15/100);
  parcela = 354.80;
}
else if (salBase <= 4664.68) {
  ir = salBase* (22.5/100);
  parcela = 636.13;
}
else {
  ir = salBase* (27.5/100);
  parcela = 869.36;
}

console.log(`O salario bruto é R$${sal}.`)
console.log(`O valor do desconto do INSS é de R$${inss}.`)
console.log(`O valor descontado de Imposto de Renda é de R$${ir}.`)
console.log(`Será deduzido do imposto de renda o valor R$${parcela}.`)
console.log(`O salaŕio liquido será de R$${salBase - (ir - parcela)}.`)
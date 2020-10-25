let custoProd = 35;
let valVenda = 40;
let custoCompras = custoProd*1000;
let imposto = custoCompras*20/100;
let custoTotal = custoCompras - imposto;
let vendaTotal = valVenda*1000;
let lucro = vendaTotal - custoTotal;

if (custoProd < 0 || valVenda < 0) {
  console.error("Números inválidos")
}
else {
  console.log(lucro)
}
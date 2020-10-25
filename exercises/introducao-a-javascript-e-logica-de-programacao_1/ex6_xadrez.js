let nomepeca = "cava";
nomepeca = nomepeca.toLowerCase();

if (nomepeca == "rei") {
  console.log("Move para qualquer direção, uma casa por vez");
}
else if (nomepeca == "dama") {
  console.log("Move para qualquer direção, quantas casas quiser");
}
else if (nomepeca == "torre") {
  console.log("Linha reta");
}
else if (nomepeca == "bispo") {
  console.log("Diagonal");
}
else if (nomepeca == "cavalo") {
  console.log("Move duas casas pra frente e uma diagonal");
}
else if (nomepeca == "peão") {
  console.log("Casa da frente");
}
else {
  console.log("ERRO. Peça inválida")
} 
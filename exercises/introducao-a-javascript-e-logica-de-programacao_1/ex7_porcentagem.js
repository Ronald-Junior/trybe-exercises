let grade = 900;

if ( grade < 0 || grade > 100 ) {
  console.log("ERRO: A nota não pode ser maior que 100 e menor que 0");
} else if ( grade >= 90 ) {
  console.log("A");
} else if ( grade >= 80 ) {
  console.log("B");
} else if ( grade >= 70 ) {
  console.log("C");
} else if ( grade >= 60 ) {
  console.log("D");
} else if ( grade >= 50 ) {
  console.log("E");
} else if ( grade < 50 ) {
  console.log("E");
}
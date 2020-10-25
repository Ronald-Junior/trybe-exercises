let a = 5;
let b = 3;
let c = 6;

if (a > (b && c)) {
  console.log(a);
} 
else if (b > (a && c)) {
  console.log(b);
} 
else {
  console.log(c);
}
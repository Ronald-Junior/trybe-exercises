let n = 5;
let tria = " ";
let aster = "*";
let space = " ";

if (n > 1) {
    for (p=0; p < n; p +=2) {
        for (let q=0; q < n; q +=1) {
            if ((q >= ((n-p-1)/2)) && (q <= ((n+p-1)/2)))  {
                tria += aster;           
            } else {
                tria += space;                
            }          
        }   
        console.log(tria);
        tria = " ";
    }
} else {
    console.log ("Não deu")
}
    
 
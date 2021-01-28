let var1, var2, var3, sum;
var1 = 165;
var2 = 1;
sum = var1 + var2;
var3 = true;
//alert(var1+" "+var2+" igual a: "+sum+" "+var3);
console.log(var1, 'suma es:', var2, sum, var3);

let dato1 = 12//prompt("Escribe 1 numero");
let dato2 = 11//prompt("Escribe 2 numero");


document.write(`<h1>Quieres ver el numero<a href="http://www.google.com" target="blanck" >
${dato1}</a> 
como es</h1>`);

console.log("OPERADORES") // OPERADORES
let inc = 100;
inc++; // adicion
console.log(inc);

console.log("COMPARADORES");
let num1, num2, res1, res2, res3;
num1 = 21;
num2 = "21";
res1 = num1 === num2;
console.log(res1);
res2 = num1 < num2
console.log(res2);
// COMPARADORES LOGICOS &&(AND), ||(OR)
document.write(res1 || res2);

// MAS OPERACIONES
let varx1, varx2, varx3, varx4, ope;
var1 = 12;
var2 = 165;
var3 = 156;
var4 = 56;
var5 = 12;

// CONDICIONALES
// {
//     let numero = prompt("numero");
//     alert(numero);
//     document.write(`<br>${numero}`);
//     if (numero == "daniel") {
//         alert("okey daniel")
//     } else if (numero == "ricardo"){
//         alert("okey ricardo")
//     } else{
//         alert("no puedes ingresar")
//     }
// }

const clave1 = prompt("Ingresa tu clave");
const clave2 =prompt("confirma tu clave");
if(clave1 === clave2){
    alert("claves correctas");

}else{
    alert("colocaste la clave indicada mal");
};




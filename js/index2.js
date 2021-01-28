//Arreglos
document.write(`<b>Arreglos</b><br>`);
myDatos = ["Daniel", 25, "Colombia", true, null];
console.log(myDatos);
document.write(`Tienes ${(myDatos.length)} Datos<br>
Tu nombre es: ${myDatos[0]} Bienvenido<br>
Tienes: ${(myDatos[1])} Años<br>
Eres de: ${(myDatos[2])} ,que rico<br>
¿ Estas registrado ? ${(myDatos[3])}<br>
Tu dinero es: ${(myDatos[4])}<br><br>`)

//Arreglos asociativos
document.write(`<b>Arreglos asociativos</b><br>`);
myCargo = {
    nombre: "Analista de Sistemas",
    area: "Sistemas",
    antiguedad: "2 años"

}
console.log(myCargo)
document.write(`Tu cargo es: ${(myCargo.nombre)}<br>
Departamento de: ${(myCargo.area)}<br>
Antiguedad de: ${(myCargo.antiguedad)}<br><br>`)

// Bucles WHILE
document.write(`<b>Bucles WHILE</b><br>`);
numSuma = null;
while (numSuma < 10) {
    numSuma++
    document.write(`${(numSuma)}<br>`)

}


// Bucles DO WHILE
document.write(`<br><b>Bucles DO WHILE</b><br>`);
let num2 = 0;
do {

    document.write(`${(num2)}<br>`)
    num2++
    if (num2 == 6) {
        break;

    }

}
while (num2 <= 10)

//for bucle determinado
document.write(`<br><b>Bucle Determinado FOR</b><br>`)
for (let i = 0; i < 6; i++) {
    document.write(`${(i)}<br>`)

}



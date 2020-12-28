const data = [1, 'hola', true];
const data1 = {
    "id": 1,
    "name": 'daniel',
    "active": true
}
console.log(data1);


// OPERADORES


let var1 = 1;
let var2 = 2;
let operacion = "+";

let name1 = '+57';
let name2 = '3192841939';

const result = var1 + var2;
console.log('operacion + de:', var1, 'y', var2, 'El resultado es :', result);
console.log(name1 + name2)

// operadores == (igual), !=(diferente)
const comparation = var1 >= var2;
console.log(comparation);


//CONDICIONALES if
console.log('CONDICIONALES');
console.log('IF');
let passwordDB = 'Hola';
let input = 'hola';

let verify = passwordDB == input;
console.log(verify);

if (verify == true) {
    console.log('acceso correcto');
} else {
    console.log('verifica clave');
}

let num1 = 1
let num2 = 5

let result1 = num1 + num2

if (result1 == 2) {
    console.log('if')
} else {
    console.log('else')
}

let score = 51
if (score > 50) {
    console.log('eres supremo')
} else if (score > 10) {
    console.log('vas correcto')

} else {
    console.log('eres muy malo');
}


//CONDICIONALES SWITCH
console.log('SWITCH');

let typecard = 'Debito';
switch (typecard) {
    case 'Debito': console.log('tarjeta D:', typecard)
        break;
    case 'Credito': console.log('tarjeta C:', typecard)
        break;
    default: console.log('No se reconoce tarjeta')
        break;
}


// ITERADOR O BUCLE
console.log('ITERADOR O BUCLE WHILE');

let count = 1;
while (count <= 50) {
    //console.log(count,'como seria')
    console.log('como seria')
    //count = count + 1
    count++

}

// FOR

console.log('ITERADOR O BUCLE FOR');
let namex = [
    { "name": 'daniel', "phone": 3192841939 },
    { "name": 'ricardo', "phone": 3192841939 },
    { "name": 'mercado', "phone": 3192841939 }
]
console.log(namex[0])
console.log(namex)
console.log(namex.length)

for (let index = 0; index < namex.length; index++) {
    console.log(namex[index])

}

for (let index = namex.length - 1; index >= 0; index--) {
    console.log(namex[index])

}


//FUNCIONES
console.log('FUNCIONES');
function saludar(name) {
    //console.log(name)
    console.log('Tus Datos son', name)
}
saludar({ "name": 'daniel', "phone": 3192841939 })
saludar({ "name": 'ricardo', "phone": 3192841939 })
saludar({ "name": 'mercado', "phone": 3192841939 })

function sumar(n1,n2){
    console.log(n1+n2)
}

sumar(1,7,8)
sumar(100,200)



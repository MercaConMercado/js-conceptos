
let dinero = prompt("¿ Cuanto dinero traes ?");
console.log(dinero);



let potHel1_4kg = 2.9;
let potHelconfites = 2.9;
let bombHelHelardo = 1.8;
let bombHelHeladovich = 1.7;
let bombHelHeladix = 1.6;
let palHelCrema = 1;
let palHelAgua = 0.6;


if (dinero >= 2.9) {
    alert(`Con tus ${dinero} USD, puedes comprar helado de:
Pote de 1/4 KG - Valor:${potHel1_4kg}USD - Cambio:${(dinero - potHel1_4kg).toFixed(3)}USD
Potecito de Helado con Confites - Valor:${potHelconfites}USD - Cambio:${(dinero - potHelconfites).toFixed(3)}USD
Bombón Helado marca Helardo - Valor:${bombHelHelardo}USD - Cambio :${(dinero - bombHelHelardo).toFixed(3)}USD
Bombón Helado marca Heladovich - Valor:${bombHelHeladovich}USD - Cambio:${(dinero - bombHelHeladovich).toFixed(3)}USD
Bombón Helado marca Heladix - Valor:${bombHelHeladix}USD - Cambio:${(dinero - bombHelHeladix).toFixed(3)}USD
Palito de Helado Crema - Valor:${palHelCrema}USD - Cambio:${(dinero - palHelCrema).toFixed(3)}USD
Palito de Helado Agua - Valor:${palHelAgua}USD - Cambio:${(dinero - palHelAgua).toFixed(3)}USD`
    )

} else if (dinero >= 1.8) {
    alert(`Con tus ${dinero}USD, puedes comprar helado de:    
Bombón Helado marca Helardo - Valor:${bombHelHelardo}USD - Cambio :${(dinero - bombHelHelardo).toFixed(3)}USD
Bombón Helado marca Heladovich - Valor:${bombHelHeladovich}USD - Cambio:${(dinero - bombHelHeladovich).toFixed(3)}USD
Bombón Helado marca Heladix - Valor:${bombHelHeladix}USD - Cambio:${(dinero - bombHelHeladix).toFixed(3)}USD
Palito de Helado Crema - Valor:${palHelCrema}USD - Cambio:${(dinero - palHelCrema).toFixed(3)}USD
Palito de Helado Agua - Valor:${palHelAgua}USD - Cambio:${(dinero - palHelAgua).toFixed(3)}USD`
    )   

} else if (dinero >= 1.7) {
    alert(`Con tus ${dinero} USD, puedes comprar helado de:
Bombón Helado marca Heladovich - Valor:${bombHelHeladovich}USD - Cambio:${(dinero - bombHelHeladovich).toFixed(3)}USD
Bombón Helado marca Heladix - Valor:${bombHelHeladix}USD - Cambio:${(dinero - bombHelHeladix).toFixed(3)}USD
Palito de Helado Crema - Valor:${palHelCrema}USD - Cambio:${(dinero - palHelCrema).toFixed(3)}USD
Palito de Helado Agua - Valor:${palHelAgua}USD - Cambio:${(dinero - palHelAgua).toFixed(3)}USD`
    )

} else if (dinero >= 1.6) {
    alert(`Con tus ${dinero}USD, puedes comprar helado de:
Bombón Helado marca Heladix - Valor:${bombHelHeladix}USD - Cambio:${(dinero - bombHelHeladix).toFixed(3)}USD
Palito de Helado Crema - Valor:${palHelCrema}USD - Cambio:${(dinero - palHelCrema).toFixed(3)}USD
Palito de Helado Agua - Valor:${palHelAgua}USD - Cambio:${(dinero - palHelAgua).toFixed(3)}USD`
    )

} else if (dinero >= 1) {
    alert(`Con tus ${dinero}USD, puedes comprar helado de:
Palito de Helado Crema - Valor:${palHelCrema}USD - Cambio:${(dinero - palHelCrema).toFixed(3)}USD
Palito de Helado Agua - Valor:${palHelAgua}USD - Cambio:${(dinero - palHelAgua).toFixed(3)}USD`
    )

} else if (dinero >= 0.6) {
    alert(`Con tus ${dinero}USD, puedes comprar helado de:
    Palito de Helado Agua - Valor:${palHelAgua}USD - Cambio:${(dinero - palHelAgua).toFixed(3)}USD`
    )


}
else if (dinero == "") {
    alert("El Campo de dinero esta vacio, Vuelve a intentar")

}
else {
    alert(`Con tus ${dinero} USD, No puedes comprar ningun helado`)
}
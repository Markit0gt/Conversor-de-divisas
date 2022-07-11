let moneda = prompt('Escribir que moneda desea convertir (USD/EUR)')
let dinero = prompt('ingrese la cantidad de dinero');
let dolar = 268;
let euro = 288;
let resultado
    if (moneda == "usd"){
        resultado = dinero * dolar;
        console.log('el resultado de USD a ARG es: ', resultado);
        }
    else if (moneda == "eur") {
        resultado = dinero * euro;
        console.log('el resultado de EUR a ARG es: ', resultado);
        }
    else {
        console.log("error al selecionar la moneda")
};



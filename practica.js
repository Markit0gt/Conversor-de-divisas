let moneda = prompt('Escribir que moneda desea convertir (USD/EUR)')
let dinero = prompt('ingrese la cantidad de dinero');
const monedas = [
    {moneda: "dolar", value: "268"},
    {moneda: "euro", value: "288"},
];
(function convertir (){
    if (moneda == "usd"){
        let resultado = dinero * monedas[0].value;
        console.log("el resultado de dolares a argentino es: ", resultado);
    }
    else if (moneda == "eur"){
        let resultado = dinero * monedas[1].value;
        console.log("el resultado de euro a argentino es; ", resultado);
    }
    else{
        alert("error al convertir")
    }
})();



let dinero = document.getElementById("moneda");

let resultado =0;



let btn_convertir = document.getElementById("btn_convertir")
btn_convertir.addEventListener("click", function(){
    const monedas = [{moneda: "dolar", value: "320"},
    {moneda: "euro", value: "288"},];
    if (document.getElementById("dolar").checked){
        resultado = dinero.value * monedas[0].value;
        let resultado_mensaje= document.getElementById("resultado").innerHTML = resultado;
    }
    else if (document.getElementById("euro").checked){
        resultado = dinero.value * monedas[1].value;
        let resultado_mensaje= document.getElementById("resultado").innerHTML = resultado;
    }
    else{
        let resultado_mensaje= document.getElementById("resultado").innerHTML = "error al elegir la moneda!";
    }
});



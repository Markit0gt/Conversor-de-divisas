

let dinero = document.getElementById("moneda");
let resultado = 0;

const monedas = [{moneda: "dolar", value: "320"},
                {moneda: "euro", value: "288"}];


let btn_convertir = document.getElementById("btn_convertir")
btn_convertir.addEventListener("click", function(){
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
    historial();
});



    function historial(){
        let resultadost = sessionStorage.setItem(`resultado`, resultado);
        let historialres= sessionStorage.getItem("resultado");
        let historialbox= document.getElementById("historial");
        let p= document.createElement('p');
        if (document.getElementById("dolar").checked){
        p.innerHTML = dinero.value + "$ USD → ARS: " + historialres;
    }
    else if(document.getElementById("euro").checked){
        p.innerHTML = dinero.value + "€ EUR → ARS: " + historialres;
    }
    historialbox.append(p);
}

let alertausd = document.getElementById("dolar");
alertausd.addEventListener("click", function(){
    Toastify({
        text: "Cuidado el dolar esta re salado",
        duration: 2000,
        gravity: "top",
        position: "left",
    }).showToast();
});
let alertaeur = document.getElementById("euro");
alertaeur.addEventListener("click", function(){
    Toastify({
        text: "El euro tambien esta carisimo!",
        duration: 2000,
        gravity: "top",
        position: "left",
    }).showToast();
});

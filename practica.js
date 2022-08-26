

//constantes

const moneda_uno = document.getElementById('moneda-uno');
const cantidad_uno = document.getElementById('cantidad-uno');
const moneda_dos = document.getElementById('moneda-dos');
const cantidad_dos = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');
const tazabtn = document.getElementById('taza');
const btn_hist = document.getElementById('btn-hist')

//eventos
moneda_uno.addEventListener('change', calcular);
moneda_dos.addEventListener('change', calcular);
cantidad_uno.addEventListener('input', calcular);
cantidad_dos.addEventListener('input', calcular);
btn_hist.addEventListener('click', historial);


taza.addEventListener('click', ()=>{
    let res1 = cantidad_uno.value;
    cantidad_uno.value = cantidad_dos.value;
    cantidad_dos.value = res1;
    calcular();
})


// Funciones de "calcular" y la de "historial"

function calcular(){
    const monedauno_valor = moneda_uno.value;
    const monedados_valor = moneda_dos.value;
    fetch(`https://v6.exchangerate-api.com/v6/48da62a3c7f54faf571c5834/latest/${monedauno_valor}`)
    .then(res => res.json())
    .then(data => {
        const taza = data.conversion_rates[monedados_valor];
        cantidad_dos.value = (cantidad_uno.value * taza).toFixed(3);
    });
}



function historial(){
    let resultado_uno = cantidad_uno.value;
    let resultado_dos = cantidad_dos.value;
    let moneda1 = moneda_uno.options[document.getElementById('moneda-uno').selectedIndex].text;
    let moneda2 = moneda_dos.options[document.getElementById('moneda-dos').selectedIndex].text;
    let historialbox= document.getElementById("historial");
    let p_uno= document.createElement('p');
    p_uno.innerText = moneda1 + " " + resultado_uno;
    let p_tres= document.createElement('p');
    p_tres.innerText = "⇊";
    let p_dos= document.createElement('p');
    p_dos.innerText = moneda2 +" "+ resultado_dos;
historialbox.append(p_uno, p_tres, p_dos);
}
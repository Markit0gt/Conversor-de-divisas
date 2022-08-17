



    function historial(){
        let resultadohis = document.getElementById("cantidad-dos")
        resultadohis = sessionStorage.setItem(`historialres`, cantidad_dos);
        let historialres= sessionStorage.getItem("historialres");
        let historialbox= document.getElementById("historial");
        let p= document.createElement('p');
        p.innerhtml = moneda_uno.textContent + historialres;
    //     if (document.getElementById("dolar").checked){
    //     p.innerHTML = dinero.value + "$ USD → ARS: " + historialres;
    // }
    // else if(document.getElementById("euro").checked){
    //     p.innerHTML = dinero.value + "€ EUR → ARS: " + historialres;
    // }
    historialbox.append(p);
}





const moneda_uno = document.getElementById('moneda-uno');
const cantidad_uno = document.getElementById('cantidad-uno');
const moneda_dos = document.getElementById('moneda-dos');
const cantidad_dos = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');
const tazabtn = document.getElementById('taza');

//eventos
moneda_uno.addEventListener('change', calcular);
moneda_dos.addEventListener('change', calcular);
cantidad_uno.addEventListener('input', calcular);
cantidad_dos.addEventListener('input', calcular);


// cantidad_dos.addEventListener('input', historial)

taza.addEventListener('click', ()=>{
    let res1 = cantidad_uno.value;
    cantidad_uno.value = cantidad_dos.value;
    cantidad_dos.value = res1;
    calcular();
})

// moneda_uno.addEventListener('change', () =>{
    
//     if (document.getElementById("ars") = true){
//         Toastify({
//             text: "Cuidado el dolar esta re salado",
//             duration: 3000,
//             gravity: "top",
//             position: "left",
//         }).showToast()
//     }

//     else if (document.getElementById("eur") = true){
//         Toastify({
//             text: "Uhhh el euro tambien esta re salado!",
//             duration: 3000,
//             gravity: "top",
//             position: "left",
//         }).showToast();
//     }
//     else{
//         Toastify({
//             text: "Convertido con exito",
//             duration: 1000,
//             gravity: "top",
//             position: "left",
//         }).showToast();
//     }
// });



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
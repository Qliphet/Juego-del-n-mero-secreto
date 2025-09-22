let numeroSecreto = 6;
let intentos = 1;
let numeroUsuario = 0

console.log(`Número secreto: ${numeroSecreto}`);
console.log(`Intentos: ${intentos}`);
console.log(`Número del usuario: ${numeroUsuario}`);

while(numeroUsuario!=numeroSecreto){
numeroUsuario = prompt("Me indicas un número del 1 al 10?, por favor");
if (numeroUsuario == numeroSecreto) {
    alert(`¡Has acertado! ${numeroSecreto} es el número correcto, y sólo te tomó ${intentos} intentos`);
} else {
        alert(`Esa mugre qué?, ya vas ${intentos} inténtalo de nuevo`);
        intentos++;
}
}
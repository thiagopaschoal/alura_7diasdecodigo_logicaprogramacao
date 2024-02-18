const maximo = 10;
const minimo = 0;

let totalDeTentativas = 3;
let aindaTemChances = true;

const numeroSorteado = Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

while (aindaTemChances) {

    const numeroDigitado = prompt("digite um número: ")
    
    if (numeroDigitado > numeroSorteado) {
        alert("o numero digitado é maior que o número secreto")
    } else if (numeroDigitado < numeroSorteado) {
        alert("o numero digitado é menor que o número secreto")
    } else {
        aindaTemChances = false
        alert("parabéns!!! vc acertou!!!!")
    }

    totalDeTentativas--;

    if (totalDeTentativas == 0) {
         alert("Queee penaa :(!! O número secreto era " + numeroSorteado)
         break;
    } else {
        alert("vc tem mais " + totalDeTentativas + " tentativas")
    }
}
const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const multiplicacao = (num1, num2) => num1 * num2;
const divisao = (num1, num2) => num1 / num2;
const sair = () => alert("até a próxima!!!")

while (true) {

    const operacao = prompt("qual operação deseja fazer? digite [soma], [subtracao], [multiplicacao], [divisao] ou [sair]")
    if (operacao == "sair") {
        sair()
        break;
    }

    const primeiroNumero = prompt("digite um primeiro número:")
    const segundoNumero = prompt("digite um segundo número:")

    switch (operacao) {
        case "soma":
            alert(primeiroNumero + " + " + segundoNumero + " = " + soma(primeiroNumero, segundoNumero))
            break;
        case "subtracao":
            alert(primeiroNumero + " - " + segundoNumero + " = " + subtracao(primeiroNumero, segundoNumero))
            break;
        case "multiplicacao":
            alert(primeiroNumero + " * " + segundoNumero + " = " + multiplicacao(primeiroNumero, segundoNumero))
            break;
        case "divisao":
            alert(primeiroNumero + " / " + segundoNumero + " = " + divisao(primeiroNumero, segundoNumero))
            break;
        default:
            console.error("operador inválido")
    }

}
const opcaoAreaEscolhida = prompt("Qual área deseja seguir: [1] - Backend ou [2] - Frontend")

let opcaoTechEscolhida;
let opcaoInvalida = false;

if (opcaoAreaEscolhida == 2) {
    opcaoTechEscolhida = prompt("Qual framework deseja aprender? React ou Vue")
} else if (opcaoAreaEscolhida == 1) {
    opcaoTechEscolhida = prompt("Qual linguagem de programação deseja aprender? C# ou Java")
} else {
    opcaoInvalida = true
}

const area = opcaoAreaEscolhida == 1 ? "Backend" : "Frontend";
const opcaoCarreiraEscolhida = prompt("Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?")
alert("Você deseja muito a área " + area + " e aprender " + opcaoTechEscolhida + "!!! " + opcaoCarreiraEscolhida)

if (!opcaoInvalida) {
    while (true) {
        const queroAprenderOutrasTecnologias = prompt("em mais alguma tecnologia que você gostaria de aprender? Digite [OK] ou [Não]")
        if (queroAprenderOutrasTecnologias == "OK" || queroAprenderOutrasTecnologias == "ok" || queroAprenderOutrasTecnologias == "Ok") {
            const nomeDaTecnologia = prompt("digite o nome da tecnologia que quer aprender:")
            alert(nomeDaTecnologia + " é uma linguagem muito legal e muito usada no mercado")
        } else {
            break;
        }
    }
} else {
    alert("opção inválida!!!")
}
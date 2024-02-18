const frutas = [];
const laticionios = [];
const doces = [];
const congelados = [];

const adicionar = () => {
    const comida = prompt("qual comida deseja adicionar?")
    const categoria = prompt("qual categoria essa comida pertence: [frutas], [laticionios], [doces] ou [congelados]")
    switch (categoria) {
        case "frutas":
            frutas.push(comida)
            break
        case "laticionios":
            laticionios.push(comida)
            break
        case "doces":
            doces.push(comida)
            break
        case "congelados":
            congelados.push(comida)
            break
        default:
            alert("A categoria " + categoria + " não existe!!")
    }
}

const imprimirListaDeCompras = () => {
    return "Frutas: " + frutas + "\n" 
        + "Laticinios: " + laticionios + "\n" 
        + "Doces: " + doces + "\n" 
        + "Congelados: " + congelados
}

while (true) {
    const opcaoListaDeCompras = prompt("Você deseja adicionar uma comida na sua lista de compras? digite [sim] ou [não]")
    if (opcaoListaDeCompras == "sim") {
        adicionar()
    } else {
        break;
    }
}

alert("Lista de Compras: \n" + imprimirListaDeCompras())
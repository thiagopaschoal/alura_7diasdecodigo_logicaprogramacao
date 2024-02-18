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

const remover = () => {
    const comidaParaRemover = prompt("Qual comida deseja remover da sua lista de compras: \n" + imprimirListaDeCompras())
    if (frutas.includes(comidaParaRemover)) {
        removerItem(frutas, comidaParaRemover)
    } else if (laticionios.includes(comidaParaRemover)) {
        removerItem(laticionios, comidaParaRemover)
    } else if (doces.includes(comidaParaRemover)) {
        removerItem(doces, comidaParaRemover)
    } else if (congelados.includes(comidaParaRemover)) {
        removerItem(congelados, comidaParaRemover)
    } else {
        alert("Não foi possível encontrar o item dentro da lista!")
    }
}

const removerItem = (lista, dadoASerRemovido) => {
    const posicaoDoElemento = lista.indexOf(dadoASerRemovido)
    lista.splice(posicaoDoElemento)
}

const imprimirListaDeCompras = () => {
    return "Frutas: " + frutas + "\n" 
        + "Laticinios: " + laticionios + "\n" 
        + "Doces: " + doces + "\n" 
        + "Congelados: " + congelados
}

while (true) {
    const opcaoListaDeCompras = prompt("Você deseja adicionar ou remove uma comida na sua lista de compras? digite [adicionar], [remover] ou [não]")
    if (opcaoListaDeCompras == "adicionar") {
        adicionar();        
    } else if (opcaoListaDeCompras == "remover") {
        remover();
    } else {
        break;
    }
}

alert("Lista de Compras: \n" + imprimirListaDeCompras())
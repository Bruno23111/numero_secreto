const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero secreto: ', numeroSecreto)

const elementoMenorValor = document.querySelector('#menor_valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior_valor')
elementoMaiorValor.innerHTML = maiorValor
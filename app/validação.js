function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += ('<div>Valor invalido<div>')
        return
    }

    if(numeroMaiorQueOPermitido(numero)){
        elementoChute.innerHTML +=(`
        <div>valor inválido!: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `)
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>
        <button id="jogar_novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor! <i class="fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior! <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function numeroMaiorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if(e.target.id = 'jogar_novamente'){
        window.location.reload()
    }
})
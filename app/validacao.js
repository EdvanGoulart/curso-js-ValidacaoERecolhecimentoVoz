function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido !</div>'
        return
    }

    if (numeroForMaiorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>Numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return

    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
                <h2>Você acertou ! </h2>
                <h3> O numero secreto é ${numeroSecreto} </h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> 
        `
    } else[
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> 
        `
    ]
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
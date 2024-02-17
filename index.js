function CalculoVitoria ( quantidadeVitoria, quantidadeDerrota ) {
    let resultado = quantidadeVitoria - quantidadeDerrota
    return resultado
}

function Jogadas( quantidadeVitoria, quantidadeDerrota ) {
    let vitorias = 0
    vitorias = CalculoVitoria(quantidadeVitoria,quantidadeDerrota)

    if (vitorias <= 10){
        return mensagem (vitorias,"ferro")
    }
    if (vitorias >= 11 && vitorias <= 20 ){
        return mensagem ( vitorias,"Bronze")
    }
    if (vitorias >= 21 && vitorias <= 50){
        return mensagem (vitorias, "Prata")
    }
    if (vitorias >= 51 && vitorias <= 80){
        return mensagem (vitorias, "Ouro")
    }
    if (vitorias >= 81 && vitorias <= 90){
        return mensagem (vitorias,"Diamante")
    }
    if (vitorias >= 91 && vitorias <= 100){
        return mensagem (vitorias,"lendários")
    }
    if (vitorias >= 101){
        return mensagem (vitorias, "imortal")
    }
}

function mensagem (saldoVitorias,nivel){
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
}

const jogadorNapoleao = Jogadas(115,5 )
console.log("Rankeadas:", jogadorNapoleao)
let saldoDeVitorias = saldo(107,5)
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function saldo(vitorias, derrotas){
    let saldoDeRankeadas = vitorias - derrotas
    return saldoDeRankeadas
}

if(saldoDeVitorias <= 10 ){
    console.log("o herói tem saldo de " + saldoDeVitorias + " está no nível de "+nivel[0])
}else if(saldoDeVitorias <= 20){
    console.log("o herói de nome " + saldoDeVitorias + " está no nível de "+nivel[1])
}else if(saldoDeVitorias <= 50){
    console.log("o herói de nome " + saldoDeVitorias + " está no nível de "+nivel[2])
}else if(saldoDeVitorias <= 80){
    console.log("o herói de nome " + saldoDeVitorias + " está no nível de "+nivel[3])
}else if(saldoDeVitorias <= 90){
    console.log("o herói de nome " + saldoDeVitorias + " está no nível de "+nivel[4])
}else if(saldoDeVitorias <= 100){
    console.log("o herói de nome " + saldoDeVitorias + " está no nível de "+nivel[5])
}else if(saldoDeVitorias >= 101){
    console.log("o herói de nome " + saldoDeVitorias + " está no nível de "+nivel[6])
}
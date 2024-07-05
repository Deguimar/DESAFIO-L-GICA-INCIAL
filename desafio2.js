
console.log("Bem vindo para saber seu rank digite seu nome primeiro")
let nome =  "Deguimar"
console.log("Olá " + nome + " para descobrir seu rank digite o número de vitorias e derrotas das partidas jogadas")
let rank = ""

function CalculoDePartidas(vitorias,derrotas){
	let saldoDeRankeadas = vitorias - derrotas
	return saldoDeRankeadas
}

function determiniarRank(vitorias){
 if(vitorias < 10 ){
 	return rank = "FERRO"
 }else if(vitorias > 11 && vitorias <= 20){
	return rank = "BRONZE"
  }else if(vitorias > 21 && vitorias <= 50){
	return rank = "PRATA"
  }else if(vitorias > 51 && vitorias <= 80){
	return rank = "OURO"
  }else if(vitorias > 81 && vitorias <= 90){
	return rank = "DIAMANTE"
  }else if(vitorias > 91 && vitorias <= 100){
	return rank = "LENDÁRIO "
  }else if(vitorias >= 101){
	return rank = "IMORTAL"
  }
}

let saldoDePartida = CalculoDePartidas(80,50)

console.log("O Herói tem de saldo de "+ saldoDePartida +" vitórias está no rank  "+ determiniarRank(80) )
//Sistema em que você cadastra várias notas e compara se você está acima da média
const readline = require("readline-sync")
var notas = []
var soma = 0
var qtdNotas = readline.questionInt("Quantas notas voce quer cadastrar? ")
for (let index = 1; index < qtdNotas + 1; index++) { //Adicionando notas no array
    var nota = readline.questionFloat(`Cadastrar nota ${index}: `)
    notas.push(nota)
}
for (let i = 0; i < notas.length; i++) { //Percorrendo array e somando valores em uma unica variavel
    soma += notas[i]
}
var media = soma / notas.length
var suaNota = readline.questionFloat("Sua nota: ")
if(suaNota > media){
    console.log(`A média das notas cadastradas foram ${media.toFixed(2)} e a sua nota foi ${suaNota.toFixed(2)}.
    Voce ficou acima da media!`)
} else if(suaNota == media){
    console.log(`Voce ficou com a nota igual a media, ambas ${media.toFixed(2)}.`);
} else{
    console.log(`Voce ficou abaixo da media(${media.toFixed(2)}) com sua nota ${suaNota.toFixed(2)}.`);
}

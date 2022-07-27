//SISTEMA QUE CALCULA MÉDIA DE UM ALUNO BASEADO NO SISTEMAS DE NOTAS DA MINHA FACULDADE

const readline = require("readline-sync")


console.log("SISTEMA DE MÉDIA");


let Exe_online1 = readline.questionFloat("Nota do Exercicio 1: ")
let Prova_P1 = readline.questionFloat("Nota da prova P1: ")
let Exe_online2 = readline.questionFloat("Nota do Exercicio 2: ")
let Prova_P2 = readline.questionFloat("Nota da prova P2: ")
let P1 = Exe_online1 + Prova_P1
let P2 = Exe_online2 + Prova_P2
let mediafinal = (P1 * 0.4) + (P2 * 0.6)
let mediaForm = mediafinal.toFixed(2)

console.log("No primeiro bimestre você ficou com ",P1)
console.log("No segundo bimestre você ficou com ",P2)
console.log("A media final foi ",parseFloat(mediaForm)," Sendo assim seu resultado final é:")
if (parseFloat(mediafinal)>=5){
  console.log("APROVADO")
}else{
  console.log("REPROVADO")
}

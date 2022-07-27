//FAÇA UM SISTEMA QUE LEIA UM NÚMERO E APRESENTE SUA TABUADA

const readline = require("readline-sync")


console.log("SISTEMA DE TABUADA");
var num = readline.questionInt("Digite um numero: ")
console.log(`Tabuada de ${num}:`);
for (let index = 1; index < 11; index++) { //INICIO, FIM, PASSO
    console.log(`${num} x ${index} = ${num * index}`);
}
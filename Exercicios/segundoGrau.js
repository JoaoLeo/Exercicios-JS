//Sistema de calculo de equação de segundo grau baseado na formula de bhaskara
const readline = require("readline-sync")
function Delta(a=0,b=0,c=0){
    var res = (b*b) - (4*a*c)
    return res
}

var a = readline.questionInt("Valor de a= ")
var b = readline.questionInt("Valor de b= ")
var c = readline.questionInt("Valor de c= ")

var delta = Delta(a,b,c)
if(delta < 0){
    console.log("Não possui raizes reais.");
} else{
    if(delta == 0){
        var raiz = Math.sqrt(delta)
        var res1 = (-b + raiz) /(2*a)
        console.log(`Ambas as raizes são ${res1.toFixed(0)}.`)
    } else{
        var raiz = Math.sqrt(delta)
        var res1 = (-b + raiz) /(2*a)
        var res2 = (-b - raiz) /(2*a)
        console.log(`As raizes são ${res1.toFixed(0)} e ${res2.toFixed(0)}.`)
    }
}
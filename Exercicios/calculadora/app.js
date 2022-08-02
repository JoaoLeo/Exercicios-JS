var optContinue = true
const readline = require("readline-sync")
const funcs = require("./functions")
while(optContinue){ 
    funcs.line("=")
    console.log("Calculadora")
    funcs.line("=")
    var n1 = readline.questionInt("Numero 1: ")
    var n2 = readline.questionInt("Numero 2: ")
    console.log("Escolha uma opção")
    console.log(`
    [+] SOMA
    [-] SUBTRACAO
    [X] MULTIPLICACAO
    [/] DIVISAO
    [#] SAIR DO PROGRAMA`);

    var opt = readline.question("Sua opcao: ").toLowerCase()
    funcs.line("-")
    switch (opt) {
        case "+":
            console.log(funcs.calculadora.sum(n1,n2));
            break;
        case "-":
            console.log(funcs.calculadora.sub(n1,n2))
            break
        case "x":
            console.log(funcs.calculadora.mult(n1,n2))
            break
        case "/":
            console.log(funcs.calculadora.div(n1,n2))
            break    
        case "#":
            optContinue = false
            break   
        default:
            console.log("Digite uma opcao acima.");
            break;
    }
    
}
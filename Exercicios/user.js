//SISTEMA QUE GUARDA INFORMAÇÕES DE UM USUARIO EM UMA VARIAVEL E PERMITE AO USUARIO ACESSAR ESSAS INFORMAÇÕES
const readline = require("readline-sync")
const menuLine = "="
var option = true
var user = {
    nome: "",
    email: "",
    idade: 0,
    sexo: "",
    profissao: ""
}

console.log("Cadastre as informações de um usuario");

user.nome = readline.question("Nome: ")
user.email = readline.questionEMail("Email: ")
user.idade = readline.questionInt("Idade: ")
user.sexo = readline.question("Sexo('M', 'F'): ")
user.profissao = readline.question("Profissao: ")
while (option){
    console.log(menuLine.repeat(35))
    console.log(`Escolha um dado para visualizar
    [1] Nome
    [2] Email
    [3] Idade
    [4] Sexo
    [5] Profissao
    [6] Sair do programa`);
    console.log(menuLine.repeat(35))
    var escolha = readline.questionInt("Sua opcao: ")
    console.log(menuLine.repeat(35))
    switch (escolha) {
        case 1:
            console.log(`Nome: ${user.nome}`);
            break;
        case 2:
            console.log(`Email: ${user.email} `)
            break;
        case 3:
            console.log(`Idade: ${user.idade}`)
            break;
        case 4:
            console.log(`Sexo: ${user.sexo}`);
            break;
        case 5:
            console.log(`Profissao: ${user.profissao}`);
            break;
        case 6:
            console.log("Programa encerrado!")
            option = false
            break;
        default:
            console.log("Escolha uma opcao acima")
            break;
    }  
}

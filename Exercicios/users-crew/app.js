//Sistema que percorre DataBase falso retorna se informação existe ou não
const DB = require("./fakeDB.js")
const readline = require("readline-sync")

function checkEmail(email){ //Função percorre cada elemento dos users e retorna se o email existe ou não
    var existe = null
    console.log("Procurando email...")
    setTimeout(() => {
            DB.users.forEach(user => {
            var userEmail =  DB.users.find(user => user.email == email)
            if(userEmail == undefined){
                existe = false
            }else{
                existe = true
            }
           })
           if(existe){
            console.log(`O email ${email} esta no banco de dados!`)
            
        } else{
            console.log("Email nao encontrado no banco de dados");
        }
    }, 2*1000 )
    
    
}
console.log("Digite um email para saber se ele esta cadastrado!");
var email = readline.questionEMail("Email: ")
console.log(checkEmail(email))

var mugiwara = {
    tripulacao:"Chapeus de palha",
    segmento: "pirata",
    recompensa: "660M"
}
var heartPirates ={
    tripulacao:"Piratas do coração",
    segmento: "pirata-medico",
    recompensa: "1.0B"
}
var users = [
    {
    nome: "joao",
    crew: mugiwara,
    email: "joao@gmail.com"
    },
    {
        nome: "luffy",
        crew: mugiwara,
        email:"merry@gmail.com"
    },
    {
        nome: "law",
        crew: heartPirates,
        email:"law@gmail.com"
    }
]

module.exports = {
    mugiwara,
    heartPirates,
    users
}

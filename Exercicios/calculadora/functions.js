class calculadora{ //Deve se usar static para usar o metodo(função) sem instanciar a classe

    static sum(n1=0,n2=0){
        return n1 + n2
    }
    static sub(n1=0,n2=0){
        return n1 - n2
    }
    static mult(n1=0,n2=0){
        return n1 * n2
    } 
    static div(n1=0,n2=0){
        return n1 / n2
    } 
}
function line(typeLine){
    console.log(typeLine.repeat(25)) 
}

module.exports = {
    calculadora,
    line
}
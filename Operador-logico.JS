/*
operador Lógico

&& -> E -> Pessoa Exigente

true && true = true
true && false = false
false && fals = false

-> Ou -> Tanto faz 
true && true = true
true && false + true
false && false =false

-> Navegação
!true = false
!false = true



*/

const digitarASenha = true
const digitarOToken = true
const numeroDaConta = false 

if(digitarASenha && digitarOToken && numeroDaConta){
    console.log("Logado com sucesso")
}else {
    console.log("Autenticação FALHOU")
}




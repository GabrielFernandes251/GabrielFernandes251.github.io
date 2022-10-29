const pessoa = {
    saudacao: 'Seja bem vindo(a)!',
    falar() {
        console.log(this.saudacao); 
    } 
}
const falarSaudacao = pessoa.falar.bind(pessoa); 
falarSaudacao()

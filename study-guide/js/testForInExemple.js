/* --------   PERCORRENDO DADOS DIGITADOS ------------ */

const submitVerification = document.getElementById('submitVerification'); 
submitVerification.addEventListener('click', function() {
    let dadosUser = {
        nome: document.getElementById('nameUser').value, 
        email: document.getElementById('emailUser').value
    }
    const {nome, email} = dadosUser; 

    if (nome === '' && email === '') {
        window.alert('[ERRO] - Digite os dados para realizar o teste. ')
    } else if (nome === '' || email === '') {
        window.alert('[ERRO] - Falta preencher apenas mais um campo. ')
    } else {
        let answer = document.getElementById('answerTest');
        
        for( let atributo in dadosUser ) {
            answer.innerHTML += `${atributo}: ${dadosUser[atributo]} <br/>`; 
        } 

        let limparDadosUser = document.getElementById('limparDadosUser').style.display = 'block'
    }
}); 

let limparDadosUser = document.getElementById('limparDadosUser'); 

limparDadosUser.addEventListener('click', function() {
    clean();
})

function clean() {
    let limparDadosUser = document.getElementById('limparDadosUser').style.display = 'none'
    let answer = document.getElementById('answerTest');
    answer.innerHTML = ''; 
}
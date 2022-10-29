// funcionalidades

/* soma */

let btnSoma = document.getElementById('btnSoma'); 

btnSoma.addEventListener('click', function() {
    let n1 = document.getElementById('n1Soma').value; 
    let n2 = document.getElementById('n2Soma').value; 
    let valorSoma = Number(n1) + Number(n2); 

    let resText = document.getElementById('res');

    resText.innerHTML += `O valor de ${n1} + ${n2} = ${valorSoma}`
}); 

// contar até 10

const btnContarUmADez = document.getElementById('btnContarUmADez'); 

btnContarUmADez.addEventListener('click', function() {
    let resUmaDez = document.getElementById('resUmaDez'); 

    let i = 1; 

    while(i <= 10) {
        resUmaDez.innerHTML += ` ${i++} `; 
    }

    let btnLimparWhile = document.getElementById('btnLimparWhile').style.display = 'flex'
}); 

/* LIMPAR WHILE */

let btnLimparWhile = document.getElementById('btnLimparWhile').addEventListener('click', () => {
    limparWhile(); 
    let btnLimparWhile = document.getElementById('btnLimparWhile').style.display = 'none'
})

function limparWhile() {
    let resUmaDez = document.getElementById('resUmaDez'); 
    resUmaDez.innerHTML = ''; 
}




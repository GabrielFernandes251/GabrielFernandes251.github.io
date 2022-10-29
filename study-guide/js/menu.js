// menu JS

const btnOpenMenu = document.getElementById('btnOpenMenu'); 

btnOpenMenu.addEventListener('click', function() {
    // conteiner
    let menu = document.getElementById('menu'); 
    // itens 
    let itensMenu = document.getElementById('itensMenu'); 
    // conteiner 
    let conteinerDiv = document.getElementById('pagePrincipal'); 

    // show
    if (itensMenu.style.display === 'block') {
        itensMenu.style.display = 'none'; 
        menu.style.width = '0'
        conteinerDiv.style.display = 'block'
        btnOpenMenu.innerHTML = '&#9776;'
    } else {
        itensMenu.style.display = 'block'; 
        conteinerDiv.style.display = 'none'
        menu.style.width = '100%'
        btnOpenMenu.innerHTML = '&#10008;'
    }
}); 

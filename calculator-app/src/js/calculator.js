// calculadora JS 

function selectedNumber(num) {
    let number = document.getElementById('areaRes').innerHTML; 
    document.getElementById('areaRes').innerHTML = number + num; 
}

function back() {
    let numberBack = document.getElementById('areaRes').innerHTML; 
    document.getElementById('areaRes').innerHTML = numberBack.substring(0, numberBack.length -1 ) 
}

function clearAll() {
    document.getElementById('areaRes').innerHTML = ''; 
}

function calcular() {
    let calcularNumbers = document.getElementById('areaRes').innerHTML; 
    document.getElementById('areaRes').innerHTML = eval(calcularNumbers)
}

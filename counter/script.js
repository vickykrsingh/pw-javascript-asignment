const incButton = document.getElementById('inc')
const decButton = document.getElementById('dec')
const resetButton = document.getElementById('reset')
const counter = document.getElementById('counter')
let value = 0;

function incVal(){
    console.log('hello')
    value=value+1;
    counter.innerHTML=value
}

function decVal(){
    value=value-1;
    counter.innerHTML=value
}

function resetVal(){
    value=0;
    counter.innerHTML=value
}

incButton.addEventListener('click',incVal)
decButton.addEventListener('click',decVal)
resetButton.addEventListener('click',resetVal)
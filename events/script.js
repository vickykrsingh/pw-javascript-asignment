const btn = document.getElementById('btn')
const bdy = document.getElementById('body')

function changeIntoRed(){
    // bdy.style.backgroundColor("red")
    document.body.style.backgroundColor = "red";
}

function changeIntoYellow(){
    bdy.style.backgroundColor="yellow"
}

function changeIntoViolet(){
    bdy.style.backgroundColor="violet"
}

function changeIntoGreen(){
    bdy.style.backgroundColor="green"
}

function changeIntoPink(){
    bdy.style.backgroundColor="pink"
}

function changeIntoPink(){
    bdy.style.backgroundColor="blue"
}


btn.addEventListener('click',changeIntoGreen)
btn.addEventListener('dblclick',changeIntoRed)
btn.addEventListener('mouseover',changeIntoPink)
btn.addEventListener('mouseout',changeIntoBlue)
btn.addEventListener('keypress',changeIntoYellow)
btn.addEventListener('keydown',changeIntoViolet)

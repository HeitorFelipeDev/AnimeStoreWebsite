var btnToggle = document.getElementById('btn-toggle')
var menu = document.querySelector('.navbar')

btnToggle.addEventListener('click', function(){
    menu.classList.add('active')
})

var btnClose = document.getElementById('btn-close')

btnClose.addEventListener('click', function(){
    menu.classList.remove('active')
})



function submit(){
    var nome = document.getElementById('nome').value
    document.getElementById('nomeUser').innerHTML = nome;
    document.getElementById('alert').classList.add('show')
    
}




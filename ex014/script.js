window.onload(carregar());
function carregar(){
    var msg = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#imagem')
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML= `Agora são ${hora} horas`
    if(hora>=0&&hora<12){
         imagem.src = 'manha.jpg'
         document.body.style.background = '#2ecd9f'
    }else if(hora>=12&&hora<=18){
         imagem.src = 'tarde.jpg'
         document.body.style.background = '#b9846f'
    }else{
        imagem.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}

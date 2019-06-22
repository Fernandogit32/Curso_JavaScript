function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        resultado.innerHTML = `Sua idade é ${idade}`  
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        
        if(fsex[0].checked){
             genero = 'Homem'
             if(idade>=0&&idade<=10){
                 img.setAttribute('src', 'menino.jpg')
             }else if(idade<59){
                img.setAttribute('src', 'adulto.jpg')
             }else{
                img.setAttribute('src', 'velho.jpg')
             }
        }else{            
                genero = 'Mulher'
                if(idade>=0&&idade<=10){
                    img.setAttribute('src', 'menina.jpg')
                }else if(idade<59){
                    img.setAttribute('src', 'adulta.jpg')
                }else{
                    img.setAttribute('src', 'velha.jpg')
                }
             
        }
        
           
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos o genero ${genero} com idade ${idade} `
    resultado.appendChild(img)
    
}
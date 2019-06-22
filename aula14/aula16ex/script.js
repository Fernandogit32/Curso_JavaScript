    var contagem = document.getElementById('contar')
    contagem.addEventListener('click', contar)
function contar(){
    
    var resultaldo =  document.getElementById('result')
    var incio = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var passo = document.getElementById('passo')
    resultaldo.innerHTML=' '
    var emotion

    if(incio.value != ''){

        for (let index = Number(incio.value); index <= Number(final.value); index +=Number(passo.value) ) {
            emotion = (index+Number(passo.value))>Number(final.value)?String.fromCodePoint(8226):String.fromCodePoint(128073)
             resultaldo.innerHTML += `${index} ${emotion}`             
         } 

    }else{
            resultaldo.innerHTML += `Impossivel contar`
    }

      
    
      
}

//bloco de codigos para add elementos
var add = document.getElementById('add')
var num = document.getElementById('num')
var sel = document.getElementById('seltab')
var res = document.getElementById('res')

add.addEventListener('click', adicionar)
let vet =[]
function adicionar(){
    
     
    if(num.value.length==0||num.value >100){
       
        alert('digite um valor para add o valor deve ser valido')
    }else{
        if(vet.indexOf(Number(num.value))==-1){
            res.hidden = true
            vet.push(Number(num.value))       
                let item = document.createElement('option')
                    item.text = `valor ${num.value} adicionado`
                    sel.appendChild(item)
                                      
                
        }else{
           
            alert('Valor invalido ou ja foi encontrado na lista')
        }    
    }
    num.value='' 
    num.focus();       
}

// bloco de codigos exibir resultados
var finalizar = document.getElementById('finalizar')

finalizar.addEventListener('click', resultado)


    function resultado(){
        if(vet.length>0){
            res.hidden = false
            var total = document.getElementById('total')
            var soma = document.getElementById('soma')
            var maior = document.getElementById('maior')
            var menor = document.getElementById('menor')
            var media = document.getElementById('media')
            var soma_total = 0
            var maior_encontrado = vet[0]
            var menor_encontrado = vet[0]
            for (const key in vet) {
                 soma_total += vet[key]
                 maior_encontrado = maior_encontrado < vet[key]?vet[key]:maior_encontrado            
                 menor_encontrado = menor_encontrado > vet[key]?vet[key]:menor_encontrado            
                }
            
            res.innerHTML += `<p>Ao todo temos ${vet.length} numeros cadastrados</p>`
            res.innerHTML += `<p>A soma de todos os numeros cadastrados é ${soma_total}</p>`
            res.innerHTML += `<p>O maior valor é ${maior_encontrado}</p>`
            res.innerHTML += `<p>O menor valor é ${menor_encontrado}</p>`
            res.innerHTML += `<p>A media de todos os valores cadastrados é ${soma_total/vet.length}</p>`
        }else{
            alert('adicione valores antes de finalizar')
        }
        
    }

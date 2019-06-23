//formas de varrer um vetor
let num = [5,6,8,1,4,3,7]
num.sort()
num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let index = 0; index < num.length; index++) {
    console.log(`A posição ${index} tem o valor ${num[index]}`)    
}

for (const key in num) {
    console.log(`A posição ${key} tem o valor ${num[key]}`)
}

console.log(`O valor 8 está na posiçaõ ${num.indexOf(8)}`)// retorna a chave de onde esse valor se encontra
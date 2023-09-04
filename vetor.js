let num = [5, 8, 9, 6];
num.sort();
num.push(1);
console.log(num);
console.log(`Nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8);
if (pos == -1){
    console.log(`o valor noa foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos}`);
}


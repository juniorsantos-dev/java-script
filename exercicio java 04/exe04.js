let num = document.querySelector('input#fnum');
let lista = document.querySelector('#lista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`; // Changed num.valores to num.value
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        for (let pos in valores) {
            if (valores[pos] > maior) maior = valores[pos];
            if (valores[pos] < menor) menor = valores[pos];
        }

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML+= `<p>A media dos valores digitados é ${media}</p>`
  
    }
}

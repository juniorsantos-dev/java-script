function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro, falta dados!');
    } else {
        res.innerHTML = `Contando.... `
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0){
            window.alert('Passo invalido')
            
        }

        if(i < f){
            //contagem crescente
            // C=CONTADOR  i=INICIO  f=FIM p=PASSO
            /*Contador vai começar no inicio, 
            e equanto o contador for menor e igual ao FIM,
            o contador vai receber ele mesmo mais o passo */
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F606}`}

            } else {
                //contagem decrecente
                /*Enquanto o contador for maior igual ao fim
                o meu contador vai perder o passo
                */
                for(let c =i; c>=f; c -= p){
                    res.innerHTML +=`${c}  \u{1F602}`
                }
            }        
        }


}

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#txtano').value;
    var res = document.querySelector('div#res');

    if (fano.length === 0 || fano > ano) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var fsex = document.querySelector('input[name="sexo"]:checked');
        var idade = ano - Number(fano);
        res.innerHTML = `Idade calculada: ${idade}`;
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >=0 && idade <10){
                //crinaça
                img.setAttribute('src','foto-bebe.jpg')
            } else if (idade <18){
                //jovem
                img.setAttribute('src','foto-jovem.jpg' )
            } else if (idade <50){
                //adulto
                img.setAttribute('src','foto-adulto.jpg' )
            } else if(idade <90){
                //idoso
                img.setAttribute('src','foto-velho.jpg' )
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
                if (idade >=0 && idade <10){
                    //crinaça
                } else if (idade <18){
                    //jovem
                } else if (idade <50){
                    //adulto
                } else if(idade <90){
                    //idoso
                }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}




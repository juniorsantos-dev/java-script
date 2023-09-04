function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new data()
var hora = 8
//var hora = data.getHours()
msg.innerHTML = `Agora sao ${horas} horas.`
if (hora >= 0 && hora < 12){
   // bom dia
   img.src = 'foto-manha.jpg'
} else if ( hora >= 12 && hora <18){
    img.src = 'foto-tarde.jpg'
    //boa tarde
} else {
    img.src = 'foto-noite.jpg'
    //boa noite
}
}

var Agora = new Date()
var hora = Agora.getHours()
console.log(`Agora sao exatamente ${hora}horas`)
if (hora < 12){
    console.log('Bom Dia')
} else if (hora <= 18 ){
    console.log('Boa tarde')
} else if (hora <= 22){
    console.log('Boa noite')
} else if (hora <=23){
    console.log('Boa madrugada')
}
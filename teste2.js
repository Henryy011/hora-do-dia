function carregar() {

    let msg = document.getElementById ('msg')
    let img = document.getElementById ('imagem')

    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    
    min = min < 10 ? '0' + min : min
    seg = seg < 10 ? '0' + seg : seg

    msg.innerHTML = `AGORA SÂO ${hora}:${min}:${seg}`

    if (hora >=0 && hora <5) {

        img.src = 'imagem/madugra.png.jpg'
         msg.innerHTML += ' - BOA MADRUGADA!'

    } else if (hora >=5 && hora <7) {

        img.src = 'imagem/comecodia.png.jpg'
        msg.innerHTML += ' - BOM COMEÇO DE DIA!!'

    } else if (hora >=7 && hora < 12) {

        img.src = 'imagem/dia.png.jpg'
        msg.innerHTML += ' - BOM DIA!'

    } else if (hora >=12 && hora < 18) {

        img.src = 'imagem/comecotarde.png.jpg'
        msg.innerHTML += ' - BOA TARDE!'

    } else if  (hora >= 18 && hora <19) {

        img.src = 'imagem/fimtarde.png.jpg'
        msg.innerHTML += ' - BOM FIM DE TARDE!'

    } else if (hora >= 19 && hora <=23) {

        img.src = 'imagem/noite.png.jpg'
        msg.innerHTML += ' - BOA NOITE!'
    }
}
setInterval (carregar , 1000)
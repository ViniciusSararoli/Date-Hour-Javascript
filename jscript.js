function mostrar() {
  var mensagem = document.getElementById('mensagem')
  var imagem = document.getElementById('imagem')
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  
  if (hora >= 0 && hora < 12) {
    mensagem.innerHTML = `Bom dia! Agora são ${hora}:${minutos} horas`
    imagem.src = "./image/dia.jpg"
    document.body.style.background = "#e2cd9f"
  }else if(hora >= 12 && hora < 18){
    mensagem.innerHTML = `Boa tarde! Agora são ${hora}:${minutos} horas`
    imagem.src = "./image/tarde.jpg"
    document.body.style.background = "#b98496f"
  }else{
    mensagem.innerHTML = `Boa noite! Agora são ${hora}:${minutos} horas`
    imagem.src = "./image/noite.jpg"
    document.body.style.background = "#515154"
  }

}

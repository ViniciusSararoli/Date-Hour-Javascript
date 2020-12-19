function mostrar() {
  var atual = new Date();
  var horario = atual.getHours();
  var minutos = atual.getMinutes();
  var dia = document.getElementById('dia')
  var tarde = document.getElementById('tarde')
  var noite = document.getElementById('noite')
  var total = atual.getHours()

  var informacao = document.getElementById('horario')

  informacao.innerHTML = `Bom dia! Agora são ${total} horas`



  if (horario >= 0 && horario < 12) {
    informacao.innerHTML = `Bom dia! Agora são ${total}:${minutos} horas`
    dia.style.display="block"
    document.body.style.background = "#e2cd9f"
  }else if(horaio < 18){
    informacao.innerHTML = `Boa tarde! Agora são ${horario}:${minutos} horas`
    tarde.style.display="block"
    document.body.style.background = "#b98496f"
  }else{
    informacao.innerHTML = `Boa noite! Agora são ${horario}:${minutos} horas`
    noite.style.display="block"
    document.body.style.background = "#515154"
  }

}

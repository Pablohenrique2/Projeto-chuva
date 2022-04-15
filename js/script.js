function verMais() {
  var pontos = document.getElementById('pontos');
  var maisTexto = document.getElementById('mais');
  var btnLeiaMais = document.getElementById('btnLeiaMais');
  if (pontos.style.display === 'none') {
    pontos.style.display = 'inline';
    maisTexto.style.display = 'none';
    btnLeiaMais.innerHTML = 'Ver mais';
  } else {
    pontos.style.display = 'none';
    maisTexto.style.display = 'inline';
    btnLeiaMais.innerHTML = 'Ver menos';
  }
}
function up() {
  var sumir = document.getElementById('sumir');
  var mudar = document.getElementById('mudar');
  if (mudar.style.display === 'none') {
    mudar.style.display = 'inline';
    sumir.style.display = 'none';
  } else {
    mudar.style.display = 'none';
    sumir.style.display = 'inline';
  }
}
function epa() {
  var sumir = document.getElementById('sumir');
  var mudar = document.getElementById('mudar');
  var cader = document.getElementById('cader');
  if (mudar.style.display === 'inline') {
    mudar.style.display = 'none';
    sumir.style.display = 'none';
    cader.style.display = 'inline';
  } else {
    mudar.style.display = 'inline';
    sumir.style.display = 'none';
    cader.style.display = 'none';
  }
}
function inicio() {
  var sumir = document.getElementById('sumir');
  var mudar = document.getElementById('mudar');
  var cader = document.getElementById('cader');

  if (cader.style.display === 'inline') {
    mudar.style.display = 'none';
    sumir.style.display = 'inline';
    cader.style.display = 'none';
  } else {
    mudar.style.display = 'none';
    sumir.style.display = 'none';
    cader.style.display = 'inline';
  }
}
let box = document.querySelector('.box');
box.addEventListener('click', function () {
  let chat = document.querySelector('.chat');
  let chat2 = document.querySelector('.chat2');
  let chat3 = document.querySelector('.chat3');
  let chat4 = document.querySelector('.chat4');
  if (
    chat.style.display === 'none' &&
    chat2.style.display === 'none' &&
    chat3.style.display === 'none' &&
    chat4.style.display === 'none'
  ) {
    chat.style.display = 'inline';
    chat2.style.display = 'inline';
    chat3.style.display = 'inline';
    chat4.style.display = 'inline';
  } else {
    chat.style.display = 'none';
    chat2.style.display = 'none';
    chat3.style.display = 'none';
    chat4.style.display = 'none';
  }
  console.log(chat);
});

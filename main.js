const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //TEMPLATE STRING

    // FUNÇÃO ANÔNIMA [UMA FUNÇÃO SEM NOME] SERVE PARA ARMAZENAR OS IDS NO CASO
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
       console.log(evento.code);

       if (evento.code == 'Space' || evento.code == 'Enter') {
        tecla.classList.add('ativa');
       }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName == 'audio') {
        elemento.play();
    } 
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}


let p1 = document.createElement('div');
p1.style.width = '50px';
p1.style.height = '50px';
p1.style.backgroundColor = 'red';
p1.style.borderRadius = "100%"
p1.style.position = 'absolute';

document.body.appendChild(p1);

let p2 = document.createElement('div')
p2.style.width = '50px';
p2.style.height = '50px';
p2.style.backgroundColor = 'green';
p2.style.borderRadius = "100%"
p2.style.position = 'absolute';
p2.style.marginTop = 300 + 'px'

document.body.appendChild(p2);

window.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'D') {
        let currentTop = parseInt(p1.style.left) || 0; // Obter a posição atual do topo
        p1.style.left = (currentTop + 10) + 'px'; // Mover 10 pixels para cima
    }
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        let currentTop2 = parseInt(p2.style.left) || 0; // Obter a posição atual do topo
        p2.style.left = (currentTop2 + 10) + 'px'; // Mover 10 pixels para cima
    }
});


let linhaChegada = document.createElement('div');
linhaChegada.style.width = '4px';
linhaChegada.style.height = '100%'; // Define a altura para cobrir toda a altura da página
linhaChegada.style.backgroundColor = 'black';
linhaChegada.style.position = 'fixed';
linhaChegada.style.right = 0;
linhaChegada.style.marginLeft = 3;

// Adicionar a linha de chegada ao body do documento
document.body.appendChild(linhaChegada);


function iniciarTemporizador() {
    var elementoContagemRegressiva = document.getElementById('contagem-regressiva');
    var contador = 3;

    elementoContagemRegressiva.textContent = contador;
    elementoContagemRegressiva.style.opacity = 1;

    var temporizador = setInterval(function () {
        contador--;
        elementoContagemRegressiva.textContent = contador;

        if (contador <= 0) {
            clearInterval(temporizador);
            elementoContagemRegressiva.textContent = 'GO';
            setTimeout(function () {
                elementoContagemRegressiva.style.opacity = 0;
            }, 1000);
        }
    }, 1000);
}

iniciarTemporizador();
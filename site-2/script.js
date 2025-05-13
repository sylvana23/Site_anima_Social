//animação de entrada
AOS.init({ duration: 800, once: true });


const carrossel = document.getElementById('carrossel');
    const voltar = document.getElementById('voltar');
    const avancar = document.getElementById('avancar');
    const totalSlides = carrossel.children.length;
    let indice = 0;

    function atualizar() {
      const larguraSlide = window.innerWidth;
      carrossel.style.transform = `translateX(-${indice * larguraSlide}px)`;
      voltar.style.display = indice === 0 ? 'none' : 'block';
      avancar.style.display = indice === totalSlides - 1 ? 'none' : 'block';
    }

    voltar.addEventListener('click', () => {
      if (indice > 0) {
        indice--;
        atualizar();
      }
    });

    avancar.addEventListener('click', () => {
      if (indice < totalSlides - 1) {
        indice++;
        atualizar();
      }
    });

    // Swipe para celular
    let startX = 0;
    const container = document.getElementById('carrosselContainer');

    container.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50 && indice < totalSlides - 1) {
        indice++;
      } else if (diff < -50 && indice > 0) {
        indice--;
      }
      atualizar();
    });

    window.addEventListener('resize', atualizar); // reajusta se mudar o tamanho da tela

    atualizar(); // inicializa
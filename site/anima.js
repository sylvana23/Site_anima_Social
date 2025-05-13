// Animações ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
    function checkScroll() {
      elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (position < screenHeight - 50) {
          el.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });
  
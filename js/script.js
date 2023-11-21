document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.cabecalho',
        translateY: [-50,0], // Mover de -100% para 0 (de baixo para cima)
        opacity: [-2, 1], // Adicionar um efeito de fade-in
        easing: 'easeOutQuad', // Easing function para uma animação suave
        duration: 1500, // Duração da animação em milissegundos
    });
});

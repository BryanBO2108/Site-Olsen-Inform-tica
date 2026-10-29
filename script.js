// Peguei esse metodo de uma biblioteca na internet para fazer o scroll suave

const lenis = new Lenis({
    duration: 1.4
});


function animarScroll(tempo) {
    lenis.raf(tempo);
    requestAnimationFrame(animarScroll);
}

requestAnimationFrame(animarScroll);
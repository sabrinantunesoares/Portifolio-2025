document.addEventListener("DOMContentLoaded", function () {
    let trilho = document.getElementById('trilho');
    let body = document.body;

    trilho.addEventListener('click', () => {
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');
    });
});

window.addEventListener("scroll", function () {
    let sobreMim = document.querySelector(".sobre-mim");
    let posicao = sobreMim.getBoundingClientRect().top;
    let telaMetade = window.innerHeight / 1.3;  // Limiar em que a seção se tornará visível

    // Verifica se a seção "Sobre Mim" está visível na tela
    if (posicao < telaMetade) {
        sobreMim.classList.add("ativo");
    } else {
        sobreMim.classList.remove("ativo");
    }
});

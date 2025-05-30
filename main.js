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

const items = document.querySelectorAll('.item');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeModal = document.querySelector('.close-btn');

items.forEach(item => {
    item.addEventListener('click', () => {
        modalTitle.textContent = item.getAttribute('data-title');
        modalText.textContent = item.getAttribute('data-text');
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % carousel.children.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(nextSection, offset = 0) {
        const section = document.getElementById(nextSection);
        if (section) {
            const topPosition = section.offsetTop - offset;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        }
    }

    // Flechas da primeira seção (ajuste fino para subir menos)
    document.querySelectorAll(".flechas span").forEach(flecha => {
        flecha.addEventListener("click", function () {
            scrollToSection("sobre-mim", 50); // Ajuste para cima
        });
    });

    // Flechas da segunda seção (ajuste para descer mais)
    document.querySelectorAll(".flechas2 span").forEach(flecha => {
        flecha.addEventListener("click", function () {
            scrollToSection("habilidades", -50); // Ajuste para baixo
        });
    });

    // Flechas da terceira seção (mantém padrão)
    document.querySelectorAll(".flechas3 span").forEach(flecha => {
        flecha.addEventListener("click", function () {
            scrollToSection("projetos");
        });
    });
});

window.addEventListener("scroll", function () {
    let secoes = document.querySelectorAll("section"); // Seleciona todas as seções
    let telaMetade = window.innerHeight / 1.3;

    secoes.forEach((secao) => {
        let posicao = secao.getBoundingClientRect().top;

        if (posicao < telaMetade) {
            secao.classList.add("ativo");
        } else {
            secao.classList.remove("ativo");
        }
    });
});

function irParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", function() {
    const seta = document.querySelector(".seta");
    if (window.scrollY > 200) {
        seta.classList.remove("hidden");
    } else {
        seta.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".seta").classList.add("hidden");
});

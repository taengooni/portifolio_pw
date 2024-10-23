// Tema Dark/Light
document.getElementById("themeSwitcher").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carrossel de Projetos
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("next").addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    document.querySelector("#carousel").style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Mensagem de Boas-vindas Animada
window.onload = function() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Bem-vindo ao meu portfólio!";
    welcomeMessage.classList.add("welcome");
    document.body.appendChild(welcomeMessage);

    setTimeout(function() {
        welcomeMessage.style.opacity = "0";
    }, 3000); // Desaparece após 3 segundos
};

document.getElementById('themeSwitcher').addEventListener('click', function() {
    const body = document.body;
    const isDarkTheme = body.classList.toggle('dark-theme'); // Alterna o tema

    // Altera o texto do botão dependendo do tema
    if (isDarkTheme) {
        this.textContent = 'Mudar para Tema Claro';
    } else {
        this.textContent = 'Mudar para Tema Escuro';
    }
});
document.getElementById('themeSwitcher').addEventListener('click', function() {
    const body = document.body;
    const isDarkTheme = body.classList.toggle('dark-theme'); // Alterna o tema

    // Altera o texto do botão dependendo do tema
    if (isDarkTheme) {
        this.textContent = 'Mudar para Tema Claro';
    } else {
        this.textContent = 'Mudar para Tema Escuro';
    }
});
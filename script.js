document.addEventListener("DOMContentLoaded", function() {
    
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Bem-vindo ao meu portfólio!";
    welcomeMessage.classList.add("welcome");
    document.body.appendChild(welcomeMessage);

    setTimeout(function() {
        welcomeMessage.classList.add('hidden'); 
        setTimeout(() => welcomeMessage.remove(), 500); 
    }, 3000); 

    document.getElementById("themeSwitcher").addEventListener("click", function() {
        const body = document.body;
        const isDarkTheme = body.classList.toggle('dark-theme'); 

        
        this.textContent = isDarkTheme ? 'Mudar tema' : 'Mudar tema';
    });

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

 
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
});

document.addEventListener("scroll", () => {
    document.querySelectorAll('.fade-in').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        element.classList.add('visible');
      }
    });
  });

  const texto = "Olá! Me chamo Ayla Lopes, atualmente tenho 19 anos e curso Sistemas para Internet na Universidade Católica de Pernambuco. Além dessa graduação, no final do ano vou começar a cursar Pedagogia na Universidade Federal de Pernambuco. São duas áreas que pretendo agregar uma à outra na minha vida profissional futuramente. Além desses dois interesses, sou apaixonada por literatura, cinema e fotografia.";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.getElementById("texto-animado").innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 100); // O texto será digitado a cada 100ms
    }
}

document.addEventListener("DOMContentLoaded", function() {
    digitar(); // Iniciar o efeito de digitação
});


  
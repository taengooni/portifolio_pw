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

const textoAnimado = "Olá! Meu nome é Ayla Lopes. Sou estudante de Pedagogia e, além disso, estou me aventurando no mundo da programação. Estudo na Universidade Federal de Pernambuco e faço parte do programa Embarque digital na Universidade Católica de Pernambuco. Gosto de aprender novas tecnologias e sempre busco melhorar minhas habilidades! Além disso, sou apaixonada por literatura, cinema e fotografia.";
const speed = 50; 
let i = 0;
const elementoTexto = document.getElementById('texto-animado');

function digitarTexto() {
  if (i < textoAnimado.length) {
    elementoTexto.innerHTML += textoAnimado.charAt(i);
    i++;
    setTimeout(digitarTexto, speed);
  }
}

window.onload = digitarTexto;


  
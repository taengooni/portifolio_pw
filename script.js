document.addEventListener("DOMContentLoaded", function() {
    
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Bem-vindo ao meu portfólio!";
    welcomeMessage.classList.add("welcome");
    document.body.appendChild(welcomeMessage);

    setTimeout(function() {
        welcomeMessage.classList.add('hidden'); // Adiciona a classe para animar a saída
        setTimeout(() => welcomeMessage.remove(), 500); 
    }, 3000); 

    // Mudar tema
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



// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Função para animar elementos quando entram na viewport
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0)';
            }
        });
    }, observerOptions);

    // Observar elementos com animações
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Função para adicionar efeito de parallax sutil no background
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.background-pattern');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Função para melhorar a experiência dos botões WhatsApp
function initWhatsAppButtons() {
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Adicionar efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Rastrear clique (opcional - para analytics)
            console.log('WhatsApp button clicked');
        });
    });
}

// Função para adicionar efeito de hover nos critérios
function initCriteriaHover() {
    const criteriaBoxes = document.querySelectorAll('.criteria-box');
    
    criteriaBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(255, 102, 0, 0.3)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Função para adicionar efeito de hover nos passos do processo
function initStepHover() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(255, 102, 0, 0.2)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Função para adicionar loading suave da página
function initPageLoad() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

// Função para adicionar efeito de digitação no título principal (REMOVIDA)
// function initTypewriterEffect() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (!heroTitle) return;
//     
//     const text = heroTitle.innerHTML;
//     heroTitle.innerHTML = '';
//     heroTitle.style.opacity = '1';
//     
//     let i = 0;
//     const typeSpeed = 50;
//     
//     function typeWriter() {
//         if (i < text.length) {
//             heroTitle.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, typeSpeed);
//         }
//     }
//     
//     // Iniciar efeito após um pequeno delay
//     setTimeout(typeWriter, 1000);
// }

// Função para adicionar contador animado nos critérios
function initCounterAnimation() {
    const criteriaValues = document.querySelectorAll('.criteria-value');
    
    criteriaValues.forEach(value => {
        const finalValue = value.textContent;
        const isNumber = !isNaN(finalValue);
        
        if (isNumber) {
            const target = parseInt(finalValue);
            let current = 0;
            const increment = target / 50;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                value.textContent = Math.floor(current);
            }, 50);
        }
    });
}

// Função para adicionar efeito de scroll suave
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Função para adicionar efeito de partículas no background (opcional)
function initParticles() {
    // Criar partículas sutis no background
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    // Criar algumas partículas
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: #FF6600;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Adicionar CSS para animação de partículas
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
`;
document.head.appendChild(particleStyle);

// Inicializar todas as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initPageLoad();
    animateOnScroll();
    initParallax();
    initWhatsAppButtons();
    initCriteriaHover();
    initStepHover();
    initSmoothScroll();
    initParticles();
    
    // Iniciar efeitos após um delay para melhor experiência
    setTimeout(() => {
        // initTypewriterEffect(); // REMOVIDO
        initCounterAnimation();
    }, 500);
});

// Otimização para dispositivos móveis
function handleMobileOptimizations() {
    if (window.innerWidth <= 768) {
        // Reduzir animações em dispositivos móveis para melhor performance
        const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right');
        animatedElements.forEach(el => {
            el.style.transition = 'opacity 0.5s ease-in-out';
        });
    }
}

// Chamar otimizações móveis
handleMobileOptimizations();
window.addEventListener('resize', handleMobileOptimizations);

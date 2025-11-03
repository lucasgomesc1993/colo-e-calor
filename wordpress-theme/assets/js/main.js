/**
 * Colo e Calor Theme - Main JavaScript
 * 
 * @package Colo_Calor
 */

(function() {
    'use strict';

    // Função para inicializar o acordeão da FAQ
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const trigger = item.querySelector('.faq-trigger');
            const content = item.querySelector('.faq-content');
            
            // Variáveis para controle de toque
            let touchStartY = 0;
            let isTouchScrolling = false;
            
            // Função para alternar o acordeão
            function toggleAccordion() {
                const isActive = item.classList.contains('active');
                
                // Fecha todos os itens
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-content').style.maxHeight = '0px';
                });
                
                // Se o item não estava ativo, abre ele
                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                // Se o item estava ativo, ele será fechado (já removemos a classe 'active' acima)
            }
            
            // Adiciona evento de clique
            trigger.addEventListener('click', function(e) {
                // Previne o comportamento padrão apenas para cliques reais
                e.preventDefault();
                toggleAccordion();
            });
            
            // Adiciona eventos de toque para dispositivos móveis
            trigger.addEventListener('touchstart', function(e) {
                touchStartY = e.touches[0].clientY;
                isTouchScrolling = false;
            });
            
            trigger.addEventListener('touchmove', function(e) {
                const touchY = e.touches[0].clientY;
                const touchDiff = Math.abs(touchY - touchStartY);
                
                // Se o movimento vertical for significativo, considera como scroll
                if (touchDiff > 10) {
                    isTouchScrolling = true;
                }
            });
            
            trigger.addEventListener('touchend', function(e) {
                // Só aciona o acordeão se não estiver rolando
                if (!isTouchScrolling) {
                    e.preventDefault();
                    toggleAccordion();
                }
            });
            
            // Adiciona suporte para teclado (Enter e Space)
            trigger.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleAccordion();
                }
            });
        });
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animação ao scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa seções para animação
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Header com efeito de scroll
    let lastScroll = 0;
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Previne FOUC (Flash of Unstyled Content)
    document.documentElement.classList.add('js-loaded');

    // Lazy loading para iframes de vídeo
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    iframe.removeAttribute('data-src');
                }
                videoObserver.unobserve(iframe);
            }
        });
    });

    document.querySelectorAll('iframe[data-src]').forEach(iframe => {
        videoObserver.observe(iframe);
    });

    // Tracking de cliques em CTAs (opcional - pode integrar com Google Analytics)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            // Exemplo de tracking (descomente se usar Google Analytics)
            // if (typeof gtag !== 'undefined') {
            //     gtag('event', 'click', {
            //         'event_category': 'CTA',
            //         'event_label': buttonText
            //     });
            // }
            
            console.log('CTA clicked:', buttonText);
        });
    });

    // Adiciona classe ao body quando página está totalmente carregada
    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');
    });

    // Inicializa o acordeão da FAQ quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQAccordion);
    } else {
        initFAQAccordion();
    }

})();
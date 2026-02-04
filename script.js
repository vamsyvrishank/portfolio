// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mathematical Background Canvas
const canvas = document.getElementById('mathBackground');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const equations = [
    'dS/dt = μS + σSdW',
    'E[R] = Rf + β(Rm - Rf)',
    '∂V/∂t + ½σ²S²∂²V/∂S²',
    'Σ(w*μ - rf)',
    'CVaR = E[X | X ≤ VaR]',
    '∫ρ(t)dt',
    'P(Xt | X1...Xt-1)',
    'argmax Σ log π',
    'λ = E[N] / Δt',
    '∇·F = ∂P/∂x',
];

const particles = [];
const numParticles = 30;

class MathParticle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.text = equations[Math.floor(Math.random() * equations.length)];
        this.speed = 0.2 + Math.random() * 0.3;
        this.opacity = 0.1 + Math.random() * 0.15;
        this.size = 10 + Math.random() * 4;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height + 50) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#00ff88';
        ctx.font = `${this.size}px 'IBM Plex Mono', monospace`;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}

for (let i = 0; i < numParticles; i++) {
    particles.push(new MathParticle());
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateBackground);
}

animateBackground();

// Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections, cards, and items
document.querySelectorAll('.section, .project-card, .education-card, .experience-card, .achievement-card, .book-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-text)';
        }
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 800;
    }
});

// Dynamic typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const lines = heroTitle.querySelectorAll('.line');
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.1}s`;
    });
}

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 40px rgba(0, 255, 136, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Education card interactions
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 40px rgba(0, 255, 136, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Skill card interactions
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 255, 136, 0.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--color-surface)';
    });
});

// Achievement card interactions
const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('highlight')) {
            this.style.borderColor = 'var(--color-accent)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('highlight')) {
            this.style.borderColor = 'var(--color-border)';
        }
    });
});

// Blog card interactions
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 30px rgba(0, 255, 136, 0.12)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Console easter egg
console.log('%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', 'color: #00ff88');
console.log('%cVamsy Vrishank - Quantitative Researcher', 'color: #00ff88; font-size: 16px; font-weight: bold;');
console.log('%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', 'color: #00ff88');
console.log('%cLooking for alpha in the console? 📈', 'color: #888; font-size: 12px;');
console.log('%cdS/dt = μS + σSdW', 'color: #e8e8e8; font-family: monospace;');
console.log('%cE[R] = Rf + β(E[Rm] - Rf)', 'color: #e8e8e8; font-family: monospace;');

// Scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: var(--color-accent);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Animate volatility chart in featured project
const volatilityChart = document.querySelector('.volatility-chart');
if (volatilityChart) {
    const path = volatilityChart.querySelector('path');
    if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        
        const observerChart = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    path.style.transition = 'stroke-dashoffset 2s ease';
                    path.style.strokeDashoffset = '0';
                }
            });
        });
        
        observerChart.observe(volatilityChart);
    }
}

// Lazy loading for images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class removal after animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Check if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Update canvas size on orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(resizeCanvas, 100);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: window.innerHeight * 0.5, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -window.innerHeight * 0.5, behavior: 'smooth' });
    }
});

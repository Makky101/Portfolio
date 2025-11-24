// Opening animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'scale(1)';


    // Add visible class to hero elements for staggered fade
    const heroElements = document.querySelectorAll('.hero-fade');
    heroElements.forEach(el => {
        el.classList.add('visible');
    });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
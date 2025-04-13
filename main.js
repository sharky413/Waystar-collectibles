// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Scroll animation effects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Navigation highlighting
function highlightNav() {
    let current = '';
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if section is in view (with some offset)
        if (scrollPosition + windowHeight/3 >= sectionTop && 
            scrollPosition <= sectionBottom - windowHeight/3) {
            current = section.getAttribute('id');
        }
    });
    
    // Special handling for contact section (footer)
    const footer = document.querySelector('footer');
    if (footer && scrollPosition + windowHeight >= footer.offsetTop + footer.offsetHeight/2) {
        current = 'contact';
    }
    
    navLinks.forEach(link => {
        link.classList.remove('text-[#FFD700]');
        const href = link.getAttribute('href');
        
        if (href === `#${current}` || 
            (current === 'contact' && href === '#contact')) {
            link.classList.add('text-[#FFD700]');
        }
    });
}


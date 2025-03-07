// Show popup on page load and handle closing
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('telegram-popup');
    const closeBtn = document.getElementById('close-popup');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    popup.style.display = 'flex';

    closeBtn.addEventListener('click', () => {
        popup.style.animation = 'popupFadeOut 0.5s ease forwards';
        setTimeout(() => { popup.style.display = 'none'; }, 500);
    });

    document.querySelectorAll('.popup-button').forEach(button => {
        button.addEventListener('click', () => {
            popup.style.animation = 'popupFadeOut 0.5s ease forwards';
            setTimeout(() => { popup.style.display = 'none'; }, 500);
        });
    });

    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        document.querySelector('.hamburger').textContent = '☰';
    }
}

// Highlight active navigation link and update navbar on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    navbar.classList.toggle('scrolled', scrollPos > 50);

    let activeSection = '';
    document.querySelectorAll('.section, #home').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            activeSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    } else {
        alert('Please complete all fields before submitting.');
    }
});

// Trigger animations on scroll
const animateElements = document.querySelectorAll('.animate-text, .animate-card, .animate-btn, .animate-form');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

animateElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
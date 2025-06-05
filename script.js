const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const contactButtons = document.querySelectorAll('.contact-btn');
const popup = document.querySelector('.popup-overlay');
const closePopup = document.querySelector('.close-popup');
const contactForm = document.getElementById('contactForm');

contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    contactForm.reset();
    popup.style.display = 'none';
    alert('Thank you for your message! We will get back to you soon.');
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

document.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('scroll', animateOnScroll); 

$(document).ready(function(){
    $("#home h1").slideDown("slow");
    $("#home p").slideDown("slow");
});
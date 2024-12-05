const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Portfolio Hover Effects
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease-in-out';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Dynamic Year Update for Footer (if applicable)
const currentYear = new Date().getFullYear();
const footerYear = document.getElementById('footerYear');
if (footerYear) {
    footerYear.textContent = currentYear;
}

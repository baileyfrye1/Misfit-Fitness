const form = document.querySelector('form');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const phone = document.querySelector('#phone').value;
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const navbar = document.querySelector('.navbar');
const info = document.querySelector('.info-grid');
const infoText = document.querySelectorAll('.info-text');
const infoLabel = document.querySelectorAll('.info-label');
const contactBtn = document.querySelector('.contact-btn');


// Animated Navbar
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Animate Info Icons
for (let i = 0; i <= infoText.length - 1; i++) {
    infoLabel[i].addEventListener('click', (e) => {
        if (e.target.tagName === 'I') {
            infoText[i].classList.toggle('show');
        }
    });
};

// Form Validation

form.addEventListener('submit', (e) => {
    let messages = [];

    if (firstName.value === '' || firstName.value == null) {
        messages.push('First name is required')
    } else if (lastName.value === '' || lastName.value == null) {
        messages.push('Last name is required')
    } else if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
});
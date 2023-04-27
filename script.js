const form = document.querySelector('form');
const firstName = document.querySelector('#first').value;
const lastName = document.querySelector('#last').value;
const phone = document.querySelector('#phone').value;
const email = document.querySelector('#email').value;
const errorNodes = document.querySelectorAll('.error');
const navbar = document.querySelector('.navbar');
const info = document.querySelector('.info-grid');
const infoText = document.querySelectorAll('.info-text');
const infoLabel = document.querySelectorAll('.info-label');


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
    })
};

// Form Validation
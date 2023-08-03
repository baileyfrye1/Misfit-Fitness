// Function Run
const app = () => {
    navScroll();
    navSlide();
    infoIcon();
    formVal();
};


// Animated Navbar
const navScroll = () => {
    const navbar = document.querySelector('.primary-header');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    });
}

// Navbar Mobile Animation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Animate Info Icons
const infoIcon = () => {
    const info = document.querySelector('.info-grid');
    const infoText = document.querySelectorAll('.info-text');
    const infoLabel = document.querySelectorAll('.info-label');
    const contactBtn = document.querySelector('.contact-btn');
    for (let i = 0; i <= infoText.length - 1; i++) {
        infoLabel[i].addEventListener('click', (e) => {
            if (e.target.tagName === 'I') {
                infoText[i].classList.toggle('show');
            }
        });
    };
}

// Form Validation

const formVal = () => {
    const form = document.querySelector('form');
    const firstName = document.querySelector('#first');
    const lastName = document.querySelector('#last');
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email');
    const error = document.querySelector('.error');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    firstName.addEventListener('keydown', (e) => {
        firstName.style.borderBottom = '1px solid green'
    });

    lastName.addEventListener('keydown', (e) => {
        lastName.style.borderBottom = '1px solid green'
    });

    email.addEventListener('keydown', (e) => {
        if (email.value.match(pattern)) {
            email.style.borderBottom = '1px solid green'
        }
    });

    form.addEventListener('submit', (e) => {
        let messages = [];

        if (firstName.value === '' || firstName.value == null) {
            messages.push('First name is required')
        } else if (lastName.value === '' || lastName.value == null) {
            messages.push('Last name is required')
        } else if (!email.value.match(pattern)) {
            messages.push('Email is invalid')
        }

        if (messages.length > 0) {
            e.preventDefault()
            error.innerText = messages.join(', ')
        }
    });
}

// Execute Functions
app();
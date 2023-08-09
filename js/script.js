// Function Run
const app = () => {
    navScroll();
    navSlide();
    infoIcon();
    formVal();
    phoneFormat();
    swiperFunc();
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

// Phone Number Formatting
const phoneFormat = () => {
    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    const phoneNumberFormatter = () => {
        const phone = document.querySelector('#phone');
        const formattedInputValue = formatPhoneNumber(phone.value);
        console.log(phone.value);
        phone.value = formattedInputValue;
    }
    phone.addEventListener('input', phoneNumberFormatter);
}

// Carousel Controls
const swiperFunc = () => {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // breakpoints: {
        //     640: {
        //         slidesPerView: 1,
        //         spaceBetween: 20,
        //     },
        //     768: {
        //         slidesPerView: 1,
        //         spaceBetween: 40,
        //     },
        //     1024: {
        //         slidesPerView: 2,
        //         spaceBetween: 50,
        //     },
        // },
    });
}

// Execute Functions
app();
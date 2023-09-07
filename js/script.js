// Function Run
const app = () => {
    navScroll();
    navSlide();
    lottieTap();
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

// Animate Fitness Tips Animations on Tap
const lottieTap = () => {
    const animation = document.querySelectorAll('.lottie-animation');
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    if (mediaQuery.matches) {
        animation.forEach((lottie) => {
            lottie.removeAttribute('hover');
            lottie.removeAttribute('loop');
            lottie.addEventListener('click', () => {
                lottie.stop();
                lottie.play();
            })
        })
    }
}

// Form Validation

const formVal = () => {
    const form = document.querySelector('form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const error = document.querySelector('.error');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    name.addEventListener('input', (e) => {
        name.style.borderBottom = '1px solid green'
    });

    email.addEventListener('input', (e) => {
        if (email.value.match(pattern)) {
            email.style.borderBottom = '1px solid green'
        }
    });

    form.addEventListener('submit', (e) => {
        let messages = [];

        if (name.value === '' || name.value == null) {
            messages.push('Name is required')
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
        phone.value = formattedInputValue;
    }
    phone.addEventListener('input', phoneNumberFormatter);
}

// Carousel Controls
const swiperFunc = () => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
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
            nextEl: ".fa-chevron-right",
            prevEl: ".fa-chevron-left",
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });

    const testimonialSlider = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        navigation: {
            nextEl: '.fa-chevron-right',
            prevEl: '.fa-chevron-left',
        },
    });
}

// Execute Functions
app();
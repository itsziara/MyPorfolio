let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            });
        }
    });
};

//Text animation
// Typing effect for multiple words
const words = ["IT", "Coder", "Web Developer"];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1200; // Delay between words

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, newWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (typedText) type();
});

//home
const homeLink = document.getElementById('home-link'); 
const homeSection = document.querySelector('.home');

if (homeLink && homeSection) {
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.animation = 'none';
        void homeSection.offsetWidth;
        homeSection.style.animation = null; 
    });
}

// Intersection Observer for Home section animation
if (homeSection) {
    const homeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add('animate');
            } else {
                homeSection.classList.remove('animate');
            }
        });
    }, { threshold: 0.2 });

    homeObserver.observe(homeSection);
}

// About
const aboutSection = document.querySelector('.about');

if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('animate');
            } else {
                aboutSection.classList.remove('animate');
            }
        });
    }, { threshold: 0.2 });

    aboutObserver.observe(aboutSection);
}

// Project
const projectGallery = document.querySelector('.project-gallery');

if (projectGallery) {
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectGallery.classList.add('animate');
            } else {
                projectGallery.classList.remove('animate');
            }
        });
    }, { threshold: 0.2 });

    projectObserver.observe(projectGallery);
}

// Blog
// Slideshow functionality for .mySlides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return;
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
    if (dots.length > 0) {
        dots[slideIndex-1].classList.add("active");
    }
}

const blogSection = document.querySelector('.blog');

if (blogSection) {
    const blogObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                blogSection.classList.add('animate');
            } else {
                blogSection.classList.remove('animate');
            }
        });
    }, { threshold: 0.2 });

    blogObserver.observe(blogSection);
}

// Contact
const contactSection = document.querySelector('.contact');

if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add('animate');
            } else {
                contactSection.classList.remove('animate');
            }
        });
    }, { threshold: 0.2 });

    contactObserver.observe(contactSection);
}

//
const menuicon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const educationLink = document.getElementById('education-link');
const skillsLink = document.getElementById('skills-link');
const experienceLink = document.getElementById('experience-link');
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skill');
const experienceSection = document.getElementById('experience');

// Add event listeners to the links
educationLink.addEventListener('click', (e) => {
    e.preventDefault();
    educationSection.style.display = 'block';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
});

skillsLink.addEventListener('click', (e) => {
    e.preventDefault();
    educationSection.style.display = 'none';
    skillsSection.style.display = 'block';
    experienceSection.style.display = 'none';
});

experienceLink.addEventListener('click', (e) => {
    e.preventDefault();
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'block';
});

// Hide all sections when clicking outside
document.addEventListener('click', (e) => {
    if (
        !educationSection.contains(e.target) &&
        !skillsSection.contains(e.target) &&
        !experienceSection.contains(e.target) &&
        !educationLink.contains(e.target) &&
        !skillsLink.contains(e.target) &&
        !experienceLink.contains(e.target)
    ) {
        educationSection.style.display = 'none';
        skillsSection.style.display = 'none';
        experienceSection.style.display = 'none';
    }
});

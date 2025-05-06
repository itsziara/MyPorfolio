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


const menuicon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/* Send email */
document.getElementById('send-email').onclick = function () {
    const name = document.querySelector('.input-box input[placeholder="Full Name"]').value;
    const email = document.querySelector('.input-box input[placeholder="Email"]').value;
    const subject = document.querySelector('.input-box input[placeholder="Subject"]').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:ziararonas1205@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    this.href = mailtoLink;
};

// Get the navigation links and sections
const educationLink = document.getElementById('education-link');
const skillsLink = document.getElementById('skills-link');
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skill');

// Add event listeners to the links
educationLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    educationSection.style.display = 'block'; // Show Education section
    skillsSection.style.display = 'none'; // Hide Skills section
});

skillsLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    educationSection.style.display = 'none'; // Hide Education section
    skillsSection.style.display = 'block'; // Show Skills section
});



document.addEventListener('click', (e) => {
    if (
        !educationSection.contains(e.target) &&
        !skillsSection.contains(e.target) &&
        !educationLink.contains(e.target) &&
        !skillsLink.contains(e.target)
    ) {
        educationSection.style.display = 'none'; 
        skillsSection.style.display = 'none'; 
    }
});

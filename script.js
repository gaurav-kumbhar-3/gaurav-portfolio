
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// Typing Animation
const typingElement = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "React Developer",
    "Full Stack Developer",
    "Python Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Home Buttons Functionality

// View My Work Button
const workButton = document.querySelector(
    '.home-buttons a[href="#projects"]'
);

workButton.addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact Me Button
const contactButton = document.querySelector(
    '.home-buttons a[href="#contact"]'
);

contactButton.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Download Resume Button
const resumeButton = document.querySelector(
    '.home-buttons a[download]'
);

resumeButton.addEventListener("click", function () {
    console.log("Resume download initiated.");
});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Opens the visitor's email application
    const recipient = "kumbhar.3008@gmail.com";

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formMessage.textContent = "Opening your email application...";

    window.location.href =
        `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

    contactForm.reset();
});
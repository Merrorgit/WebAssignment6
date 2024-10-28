document.getElementById('registration-form').onsubmit = function() {
    let password = document.getElementById('password').value; 
    let confirmPassword = document.getElementById('confirm-password').value;

    if (confirmPassword !== password) {
        alert('Passwords are different!');
        return false;
    } else {
        alert('Form successfully sent');
        document.getElementById('registration-form').reset(); 
    }
};

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const cards = document.querySelectorAll('.card'); 

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    const textElements = document.querySelectorAll('.text-light, .text-dark');
    textElements.forEach(element => {
        if (element.classList.contains('text-light')) {
            element.classList.replace('text-light', 'text-dark');
        } else if (element.classList.contains('text-dark')) {
            element.classList.replace('text-dark', 'text-light');
        }
    });

    if (navbar.classList.contains('navbar-dark')) {
        navbar.classList.replace('navbar-dark', 'navbar-light');
        navbar.classList.replace('bg-dark', 'bg-light');
    } else {
        navbar.classList.replace('navbar-light', 'navbar-dark');
        navbar.classList.replace('bg-light', 'bg-dark');
    }

    cards.forEach(card => {
        if (card.classList.contains('bg-dark')) {
            card.classList.replace('bg-dark', 'bg-light');
        } else {
            card.classList.replace('bg-light', 'bg-dark');
        }
    });

    if (body.classList.contains('light-theme')) {
        themeToggleButton.innerText = 'Switch to Dark Theme'; 
    } else {
        themeToggleButton.innerText = 'Switch to Light Theme'; 
    }
});


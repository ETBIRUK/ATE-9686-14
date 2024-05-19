const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
const body = document.querySelector('.body');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}))
document.querySelectorAll('.body').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}))


document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateEmail();
});

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        emailError.textContent = '';
        alert('Email is valid');
        // If you want to proceed with form submission, you can uncomment the next line
        // document.getElementById('emailForm').submit();
    } else {
        emailError.textContent = 'Please enter a valid email address';
    }
}

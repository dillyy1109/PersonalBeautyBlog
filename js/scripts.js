 //  FAQ Toggle Functionality
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faq = toggle.parentNode;
        faq.classList.toggle('active');

        const iconDown = toggle.querySelector('.fa-chevron-down');
        const iconClose = toggle.querySelector('.fa-xmark');

        if (faq.classList.contains('active')) {
            iconDown.style.display = 'none';
            iconClose.style.display = 'block';
        } else {
            iconDown.style.display = 'block';
            iconClose.style.display = 'none';
        }
    });
});



// Form Validation & Submission
const form = document.getElementById('form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageContent = document.getElementById('message').value.trim();

    if (name && email && messageContent) {
        formMessage.textContent = 'Submitted successfully!';
        formMessage.style.color = 'green';
        form.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});

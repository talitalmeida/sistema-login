document.addEventListener('DOMContentLoaded', (event) => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click',()=>{
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click',()=>{
        wrapper.classList.remove('active');
    });


    const loginForm = document.getElementById('.form-box.login form');
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const message = document.createElement('div');
    message.id='message';
    loginForm.appendChild(message);

    const predefinedEmail = "talitalmeida@udev.com";
    const predefinedPassword = "1";

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        if (email === '' || password === '') {
                showMessage('Preencha todos os campos.', 'error');
        } else if (email === predefinedEmail && password === predefinedPassword) {
            showMessage('Login realizado com sucesso!', 'success');
            // setTimeout(() => {
            //     window.location.href = 'welcome.html';
            // }, 2000);
        } else {
            showMessage('Senha e E-mail não correspondem!', 'error');
        }
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.className = `message ${type}`;
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }
});
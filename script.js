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


    const loginForm = document.getElementById('login');

    const message = document.createElement('div');
    message.id='message';
    loginForm.appendChild(message);

    const predefinedEmail = "user@udev.com";
    const predefinedPassword = "1";

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === predefinedEmail && password === predefinedPassword) {
            showMessage('Login realizado com sucesso!', 'success');
            // setTimeout(() => {
            //     window.location.href = 'home.vue';
            // }, 2000);
        } else {
            showMessage('Erro ao realizar login!', 'error');
        }
    });

    function showMessage(text, type) {
        const container = document.getElementById('message-container');

        const message = document.createElement('div');
        message.className = `message ${type}`;

        let icon = '';
        if (type === 'success'){
            icon = '<span class="iconify" data-icon="solar:verified-check-outline" data-inline="false"></span>';
        }else if (type === 'error'){
            icon = '<span class="iconify" data-icon="solar:close-circle-outline" data-inline="false"></span>';
        }

        message.innerHTML = `
            <div class="notify-icon">${icon}</div>
            <div class="notify">${text}</div>
        `;

        container.appendChild(message);

        setTimeout(() => {
            message.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => {
                container.removeChild(message);
            }, 500);
        }, 2000);
    }

});
// LOGOUT JS //
document.getElementById('logout-button').addEventListener('click', function() {
    // Show the modal with fade-in effect
    const modal = document.getElementById('logout-modal');
    modal.classList.add('visible');
});

document.getElementById('confirm-logout').addEventListener('click', function() {
    // Redirect to the logout page
    window.location.href = 'index.html'; // Change to the URL of your logout page
});

document.getElementById('cancel-logout').addEventListener('click', function() {
    // Hide the modal with fade-out effect
    const modal = document.getElementById('logout-modal');
    modal.classList.remove('visible');
});
    window.onload = function() {
        const email = localStorage.getItem('userEmail');
        if (email) {
            exibirNomeMedico();
            exibirDados(email);
        }

        // Configuração do botão de logout
        document.getElementById('logout-button').addEventListener('click', function() {
            const modal = document.getElementById('logout-modal');
            modal.classList.add('visible');
        });

        document.getElementById('confirm-logout').addEventListener('click', function() {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('doctorName');
            window.location.href = 'index.html';
        });

        document.getElementById('cancel-logout').addEventListener('click', function() {
            const modal = document.getElementById('logout-modal');
            modal.classList.remove('visible');
        });
    }
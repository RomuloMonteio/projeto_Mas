


document.getElementById('cancel-logout').addEventListener('click', function() {
    const modal = document.getElementById('logout-modal');
    modal.classList.remove('visible');
});
    window.onload = function() {
        const email = localStorage.getItem('userEmail');
        if (email) {
            exibirNomeMedico();
            exibirDados(email);
        }

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
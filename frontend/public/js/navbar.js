// navbar.js — Gestisce lo stato di login Google nella navbar in modo moderno ed elegante.

function initNavbar() {
    // 1. Controlla se l'utente arriva dal redirect di Google OAuth (?googleUser=...)
    var params = new URLSearchParams(window.location.search);
    var googleUser = params.get('googleUser');

    if (googleUser) {
        localStorage.setItem('googleUserName', googleUser);
        // Pulisce l'URL senza ricaricare la pagina per non mostrare il nome nei parametri dell'URL
        var cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
    }

    // 2. Recupera l'utente salvato in localStorage
    var userName = localStorage.getItem('googleUserName');
    var loginLink = document.getElementById('nav-login-link');
    var userInfo = document.getElementById('nav-user-info');
    var userNameSpan = document.getElementById('nav-user-name');
    var userAvatar = document.getElementById('nav-user-avatar');
    var logoutBtn = document.getElementById('nav-logout-btn');

    if (userName && userName.trim() !== '') {
        // Utente autenticato: mostra il badge profilo e nascondi il pulsante di login
        if (loginLink) loginLink.style.display = 'none';
        if (userInfo) userInfo.style.display = 'flex';

        // Imposta il nome utente formattato
        if (userNameSpan) {
            userNameSpan.textContent = userName;
            userNameSpan.title = userName;
        }

        // Calcola l'iniziale per l'avatar circolare
        if (userAvatar) {
            var initial = userName.trim().charAt(0).toUpperCase();
            userAvatar.textContent = initial || 'U';
        }
    } else {
        // Utente non autenticato: mostra il pulsante login e nascondi il profilo
        if (loginLink) loginLink.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
    }

    // 3. Gestione click sul pulsante Logout
    if (logoutBtn) {
        logoutBtn.onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('googleUserName');
            window.location.href = '/api/v1/auth/logout';
        };
    }
}

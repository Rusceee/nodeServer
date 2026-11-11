// persistence.js — Quando l'utente è loggato, mostra un pulsante.
// Al click, chiama il servizio persistence e mostra il JSON + l'immagine direttamente nella pagina.

function initPersistence() {
    // Controlla se l'utente è loggato
    var userName = localStorage.getItem('googleUserName');
    var section = document.getElementById('persistence-section');

    if (!userName || userName.trim() === '') {
        // Utente non loggato: nascondi la sezione
        if (section) section.style.display = 'none';
        return;
    }

    // Utente loggato: mostra la sezione con il pulsante
    if (section) section.style.display = 'block';

    // Gestione click sul pulsante
    var btn = document.getElementById('persistence-btn');
    if (btn) {
        btn.onclick = function () {
            loadPersistenceImage();
        };
    }
}

// Chiama il servizio e mostra il JSON + l'immagine inline nella pagina
async function loadPersistenceImage() {
    var result = document.getElementById('persistence-result');

    // Mostra caricamento
    result.innerHTML = '<p class="persistence-loading">Caricamento...</p>';

    try {
        // Chiama il servizio persistence
        var response = await fetch('/api/v1/persistence/api/picture');
        var data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Servizio non disponibile');
        }

        // Mostra il JSON ricevuto e l'immagine direttamente nella pagina
        var jsonBlock = document.createElement('pre');
        jsonBlock.className = 'persistence-json';
        jsonBlock.textContent = JSON.stringify(data, null, 2);

        var img = document.createElement('img');
        img.src = data.image;
        img.alt = data.filename || 'Immagine';
        img.className = 'persistence-image';
        img.onerror = function () {
            img.style.display = 'none';
            var errMsg = document.createElement('p');
            errMsg.className = 'persistence-error';
            errMsg.textContent = "Impossibile caricare l'immagine.";
            result.appendChild(errMsg);
        };

        result.replaceChildren(jsonBlock, img);

    } catch (error) {
        result.innerHTML = '<p class="persistence-error">' +
            (error.message || "Non è stato possibile caricare l'immagine.") + '</p>';
    }
}

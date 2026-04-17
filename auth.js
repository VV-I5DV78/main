const key = new URLSearchParams(window.location.search).get('key');

const path = window.location.pathname.split('/').pop();

// oldal → kulcs párosítás
const pageKeys = {
    
    'page1.html': '5mK2pRxL8',
    'page2.html': '9bJ7tDnQ3',
    'page3.html': '4cW1hGfV6',
    'page4.html': '2sN8qLvP5'
    

    /*'page1.html': 'a',
    'page2.html': 'a',
    'page3.html': 'a',
    'page4.html': 'a'*/
};

// elvárt kulcs
const validKey = pageKeys[path];

const showBlocked = function () {
    document.body.innerHTML = 'Nincs hozzáférésed! Használd a QR kódot a belépéshez.';

    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.fontSize = '2rem';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.color = '#ff4444';
    document.body.style.backgroundColor = '#eee';
};

const attachHowToUseToggle = function () {
    const toggleButtons = document.querySelectorAll('.how-to-toggle');
    toggleButtons.forEach(button => {
        const content = button.nextElementSibling;
        if (!content || !content.classList.contains('how-to-content')) return;

        const arrow = button.querySelector('.arrow');
        button.setAttribute('aria-expanded', 'false');
        button.addEventListener('click', function () {
            const isOpening = content.hidden;
            content.hidden = !content.hidden;
            if (arrow) arrow.textContent = isOpening ? '▲' : '▼';
            button.setAttribute('aria-expanded', String(isOpening));
        });
    });
};

const initPage = function () {
    if (!validKey || key !== validKey) {
        showBlocked();
        return;
    }

    attachHowToUseToggle();
};

if (document.body) {
    initPage();
} else {
    document.addEventListener('DOMContentLoaded', initPage);
}

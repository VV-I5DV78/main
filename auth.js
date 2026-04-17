const key = new URLSearchParams(window.location.search).get('key');

const path = window.location.pathname.split('/').pop();

// oldal → kulcs párosítás
const pageKeys = {
    'page1.html': '5mK2pRxL8',
    'page2.html': '9bJ7tDnQ3',
    'page3.html': '4cW1hGfV6',
    'page4.html': '2sN8qLvP5'
};

// elvárt kulcs
const validKey = pageKeys[path];

if (!validKey || key !== validKey) {
    // Wait for DOM to be ready
    if (document.body) {
        document.body.innerHTML = 'Nincs hozzáférés';
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.innerHTML = 'Nincs hozzáférés';
        });
    }
}
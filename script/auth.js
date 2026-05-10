const validPasswords = [
    "alpha123",
    "beta456",
    "gamma789",
    "delta999"
];

const entered = prompt("Add meg a csapat titkos jelszavát!");

if (!validPasswords.includes(entered)) {

    // nincs hozzáférés
    window.location.href = "/blocked.html";

}
function obliczOszczednosci() {
    // Pobieramy wartości z formularza
    const wypłata = parseFloat(document.getElementById('wypłata').value);
    const koszty = parseFloat(document.getElementById('koszty').value);
    const wydatki = parseFloat(document.getElementById('wydatki').value);

    // Sprawdzamy, czy wprowadzone dane są liczbami
    if (isNaN(wypłata) || isNaN(koszty) || isNaN(wydatki)) {
        alert("Proszę wprowadzić prawidłowe wartości!");
        return;
    }

    // Obliczamy oszczędności
    const oszczednosci = wypłata - koszty - wydatki;

    // Wyświetlamy wynik
    document.getElementById('oszczednosci').innerText = oszczednosci.toFixed(2);
}

// Funkcja logowania
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Prosta walidacja
    if (username === 'admin' && password === 'admin') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard-screen').style.display = 'block';
    } else {
        alert('Nieprawidłowa nazwa użytkownika lub hasło');
    }
}

// Funkcja wylogowania
function logout() {
    document.getElementById('dashboard-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}


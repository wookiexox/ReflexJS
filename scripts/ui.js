/**
 * Wyświetlanie wiadomości w polu 'reactionTime'
 * @param {string} message - wiadomość do wyświetlenia
 */
function displayMessage(message) {
    const reactionTimeDisplay = document.getElementById('reactionTime');
    reactionTimeDisplay.innerHTML = message;
}

/**
 * Zmiana koloru kwadratu
 * @param {string} color = zielony lub czerwony
 */
function changeSquareColor(color) {
    const square = document.getElementById('square');
    square.classList.remove('green', 'red');
    square.classList.add(color);
}

/**
 * Wyświetlanie lub schowanie przycisku 'Start'
 * @param {boolean} show - wyświetlenie przycisku
 * @param {string} text - tekst na przycisku
 */
function toggleStartButton(show, text = 'Start') {
    const startButton = document.getElementById('startButton');
    startButton.style.display = show ? 'block' : 'none';
    startButton.innerHTML = text;
}

/**
 * Dodanie/usunięcie EventListener 'click' dla kwadratu
 * @param {boolean} add = dodanie (lub nie) Listenera
 * @param {function} listener - funkcja Listener
 */
function toggleSquareClickListener(add, listener) {
    const square = document.getElementById('square');
    if (add) {
        square.addEventListener('click', listener);
    } else {
        square.removeEventListener('click', listener);
    }
}
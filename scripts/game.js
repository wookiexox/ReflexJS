let trialTimes = [];
let trialCount = 0;
const maxTrials = 5;
let colorChangeTimeout;

/**
 * Rozpoczęcie gry i schowanie przycisku
 */
function startGame() {
    toggleStartButton(false);
    trialCount = 0;
    trialTimes = [];
    changeSquareColor('green');
    toggleSquareClickListener(true, onSquareClick);
    changeSquareColorRandomly();
}

/**
 * Zmiana koloru kwadratu na czerwony, losowo między 1-7 sekund
 */
function changeSquareColorRandomly() {
    const delay = Math.floor(Math.random() * 7000) + 1000; //7 sekund w milisekundach
    colorChangeTimeout = setTimeout(() => {
        changeSquareColor('red');
        startTimer();
    }, delay);
}

/**
 * Obsługa kliknięcia w kwadrat
 */
function onSquareClick() {
    const square = document.getElementById('square');
    const reactionTimeDisplay = document.getElementById('reactionTime');

    if (square.classList.contains('green')) {
        clearTimeout(colorChangeTimeout);
        displayMessage('Za szybko! Powtórz grę jeszcze raz');
        endGame();
        return;
    }

    if (square.classList.contains('red')) {
        const reactionTime = stopTimer();
        trialTimes.push(reactionTime);
        trialCount++;
        displayMessage(`Czas reakcji: ${reactionTime} ms`);
        changeSquareColor('green');

        if (trialCount < maxTrials) {
            changeSquareColorRandomly();
        } else {
            endGame();
        }
    }
}

/**
 * Zakończenie gry, wyświetlenie wyniku po 5 turach
 */
function endGame() {
    toggleSquareClickListener(false, onSquareClick);

    if (trialCount === maxTrials) {
        const averageTime = trialTimes.reduce((a, b) => a + b, 0) / trialTimes.length;
        displayMessage(`Średni czas reakcji: ${averageTime} ms`);
    }

    toggleStartButton(true, 'Powtórz grę');
    const startButton = document.getElementById('startButton');
    startButton.removeEventListener('click', startGame);
    startButton.addEventListener('click', resetGame)
}

/**
 * Reset wyników, rozpoczęcie kolejnej tury
 */
function resetGame() {
    trialTimes = [];
    trialCount = 0;
    displayMessage('');
    startGame();
}
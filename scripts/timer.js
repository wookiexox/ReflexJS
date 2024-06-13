let startTime, endTime;

// Start licznika czasu
function startTimer() {
    startTime = new Date().getTime();
}

/**
 * Stop licznika czasu, zwraca łączny czas prób
 * @returns {number} - łączny czas prób
 */
function stopTimer() {
    endTime = new Date().getTime();
    return endTime - startTime;
}
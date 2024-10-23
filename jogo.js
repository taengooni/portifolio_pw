let secretNumber = generateSecretNumber();
let attempts = [];

document.getElementById('guessBtn').addEventListener('click', makeGuess);
document.getElementById('showSecret').addEventListener('click', () => {
    alert(`A senha secreta é: ${secretNumber}`);
});

function generateSecretNumber() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

function makeGuess() {
    const guess = document.getElementById('guessInput').value;
    if (guess.length !== 4 || isNaN(guess)) {
        alert('Digite um número de 4 dígitos!');
        return;
    }
    
    const result = getBullsAndCows(guess, secretNumber);
    attempts.unshift(`Tentativa: ${guess} | Resultado: ${result.bulls} Bulls, ${result.cows} Cows`);
    
    document.getElementById('guessList').innerHTML = attempts.map(attempt => `<li>${attempt}</li>`).join('');
    document.getElementById('result').textContent = `Última tentativa: ${guess} | ${result.bulls} Bulls, ${result.cows} Cows`;

    document.getElementById('guessInput').value = '';
}

function getBullsAndCows(guess, secret) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secret[i]) {
            bulls++;
        } else if (secret.includes(guess[i])) {
            cows++;
        }
    }

    return { bulls, cows };
}

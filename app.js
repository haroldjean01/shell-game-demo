/* Imports */

/* Get DOM Elements */
const leftShellButton = document.getElementById('left-shell-button');
const middleShellButton = document.getElementById('middle-shell-button');
const rightShellButton = document.getElementById('right-shell-button');
const pearl = document.getElementById('pearl');

const leftShellImg = document.getElementById('left-shell-img');
const middleShellImg = document.getElementById('middle-shell-img');
const rightShellImg = document.getElementById('right-shell-img');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;

/* Events */
leftShellButton.addEventListener('click', () => {
    total++;
    resetpearl();
    const pearlLocation = Math.ceil(Math.random() * 3);
    if (pearlLocation === 1) {
        wins++;
        leftShellImg.classList.add('reveal');
    } else if (pearlLocation === 2) {
        middleShellImg.classList.add('reveal');
    } else {
        rightShellImg.classList.add('reveal');
    }
    displayResults();
});

middleShellButton.addEventListener('click', () => {
    total++;
    resetpearl();
    const pearlLocation = Math.ceil(Math.random() * 3);
    if (pearlLocation === 1) {
        leftShellImg.classList.add('reveal');
    } else if (pearlLocation === 2) {
        wins++;
        middleShellImg.classList.add('reveal');
    } else {
        rightShellImg.classList.add('reveal');
    }
    displayResults();
});

rightShellButton.addEventListener('click', () => {
    total++;
    resetpearl();
    const pearlLocation = Math.ceil(Math.random() * 3);
    if (pearlLocation === 1) {
        leftShellImg.classList.add('reveal');
    } else if (pearlLocation === 2) {
        middleShellImg.classList.add('reveal');
    } else {
        wins++;
        rightShellImg.classList.add('reveal');
    }
    displayResults();
});

function resetpearl() {
    leftShellImg.classList.remove('reveal');
    middleShellImg.classList.remove('reveal');
    rightShellImg.classList.remove('reveal');
}
/* Display Functions */
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

// (don't forget to call any display functions you want to run on page load!)

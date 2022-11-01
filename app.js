/* Imports */

/* Get DOM Elements */
const leftShellButton = document.getElementById('right-shell-button');
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
    resetpearls;
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

'use strict';
//select element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//hidde element
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');



const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    curentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//staret code
//roll the dice
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. random number
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //2. disply dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //roll 1
        if (dice !== 1) {
            //add dice to curentscore
            curentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = curentScore;
        } else {
            //switch  to next player
            switchPlayer();
        }
    }
});

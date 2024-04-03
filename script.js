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

let score, curentScore, activePlayer, playing;

//for new game btn
const init = function () {
    score = [0, 0];
    curentScore = 0;
    activePlayer = 0;
    playing = true;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
};
init();

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

btnHold.addEventListener('click', function () {
    score[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    //winer
    if (score[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    }
});

btnNew.addEventListener('click', init);
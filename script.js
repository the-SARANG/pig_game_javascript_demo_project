'use strict'
//declarations
const player0el = document.querySelector('.player--0')
const player1el = document.querySelector('.player--1')
const score0el = document.querySelector('#score--0')
const score1el = document.querySelector('#score--1')
const current0el = document.getElementById('current--0')
const current1el = document.getElementById('current--1')
const diceel = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
let scores,currentScore,activePlayer,playing
//initialization
const initialization = function(){
    document.querySelector('#score--0').textContent = 0
    document.querySelector('#score--1').textContent = 0
    diceel.classList.add('hidden')
    player0el.classList.add('player--active')
    player0el.classList.remove('player--winner')
    player1el.classList.remove('player--winner')
    player1el.classList.remove('player--active')
    currentScore = 0
    activePlayer = 0
    playing = true
    scores = [0, 0];
}

initialization()
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
        player0el.classList.toggle('player--active')
        player1el.classList.toggle('player--active')
}
//rolling dice
btnRoll.addEventListener('click',function(){
    if(playing){
    //generate random dice
    const dice = Math.trunc(Math.random()*6)+1
    //display dice
    diceel.classList.remove('hidden')
    diceel.src = `dice-${dice}.png`
    //check for dice value 1
    if(dice!=1){
        //add score
        currentScore+=dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else{
        //next player
        switchPlayer()
    }
    }
})
btnHold.addEventListener('click',function(){
    if(playing){
    //add current score of active player
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    //check the score whether it is <=100
    if(scores[activePlayer]>=20){
        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        diceel.classList.add('hidden')
    }   
    //
    switchPlayer()

}
})
btnNew.addEventListener('click',initialization)



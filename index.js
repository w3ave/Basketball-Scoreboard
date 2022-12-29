let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function addOneHome(){
   homeScore += 1
   homeStoreEl.textContent = homeScore
   
}

function addTwoHome(){
   homeScore += 2
   homeStoreEl.textContent = homeScore
   
}

function addThreeHome(){
   homeScore += 3
   homeStoreEl.textContent = homeScore
   
}

let awayStoreEl = document.getElementById("away-score")
let awayScore = 0

function addOneAway(){
   awayScore += 1
   awayStoreEl.textContent = awayScore
   
}

function addTwoAway(){
   awayScore += 2
   awayStoreEl.textContent = awayScore
   
}

function addThreeAway(){
   awayScore += 3
   awayStoreEl.textContent = awayScore
   
}

function newGame(){
   awayScore = 0 
   homeScore = 0
   awayStoreEl.textContent = awayScore
   homeStoreEl.textContent = homeScore
}

function leader(){
   if (awayScore > homeScore){ 
   awayStoreEl.style.font.color = 'green';}
}
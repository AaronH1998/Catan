function drawEventCard() {
  if (players == 0) {
    getPlayerNames();
  }

  document.getElementById("event").innerHTML = "";

  if (isNewYear()) {
    showNewYear();
    shuffleEventCards(numbers, events);
    document.getElementById("nextPlayer").innerHTML = "Next: " + players[playerCounter];
    getNextPlayer();
  } else { 
    hideNewYear();
    document.getElementById("displayPlayerName").innerHTML = players[playerCounter] + "'s turn";
    document.getElementById("nextPlayer").innerHTML = "Next: " + players[nextPlayerCounter];
    getNextPlayer();

    if (rollNumber(numbers) == 7) {
      document.getElementById("event").innerHTML +=
        "Robber attacks<br>1. Each player with more  than 7 cards must discard half (rounded down).<br>2. Move the robber. Draw a random resource card from any 1 player with a settlement and/or city next to the robber's new hex.";
    }else {
      rollEvent(events);
    }
  }
}

function showNewYear(){
  document.getElementById("new").style = "display:block;";
}

function hideNewYear(){
  document.getElementById("new").style = "display:none;";
}

function isNewYear(){
  if(numbers == 0){
    return true;
  }else{
    return false;
  }
}

function getNextPlayer(){
  playerCounter = nextPlayerCounter;
  nextPlayerCounter++;

  if (nextPlayerCounter > players.length - 1) {
    nextPlayerCounter = 0;
  }
}

function initiativeButton() {
  numbers = [];
  events = [];
  players = [];
  playerCounter = 0;
  getPlayerNames();

  if(numberOfPlayers == players.length){
    document.getElementById("displayPlayerName").innerHTML = "";

    if(validatePlayerNames() > 0){
      alert("Please enter valid player names");
    }else{
      rollForInitiative();
      initiative();
      document.getElementById("initiativeScreen").style = "display:block;";
      document.getElementById("playerNames").style = "display:none;"; 
    }

  }else{
    alert("Please enter player names");
  }
}

function initiative(){
  var diceRoll = [2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,10,10,10,11,11,12];
  shuffle(diceRoll);
  var initiativeRoll = [];

  for(var a = 0; a < players.length; a++){
    initiativeRoll.unshift(diceRoll.pop());
  }

  initiativeRoll.sort(function(a, b){return a - b});
  if(initiativeRoll[players.length-2] == initiativeRoll[players.length-1]){
    initiativeRoll[players.length-2] = initiativeRoll[players.length-2] - 1;
  }

  for(x in players){
    var y = parseInt(x) + 1;
    document.getElementById("playerOrder").innerHTML+="<br>" + "Player " + ": " + players[x] + " rolled: " + initiativeRoll.pop() + "<br><br>";
    shuffle(initiativeRoll);
  }

}

function newGame() {
  document.getElementById("cardsInterface").style = "display:none;";
  document.getElementById("playerNames").style = "display:inline;";
  document.getElementById("initiativeScreen").style = "display:none;";
  document.getElementById("Player1").value = "";
  document.getElementById("Player2").value = "";
  document.getElementById("Player3").value = "";
  document.getElementById("Player4").value = "";
  document.getElementById("playerOrder").innerHTML = "";
  document.getElementById("nextPlayer").innerHTML = "";
}

function startGame(){
  document.getElementById("initiativeScreen").style = "display: none";
  document.getElementById("cardsInterface").style = "display: block";
  drawEventCard();
}
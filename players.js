function rollForInitiative(){
    const newPlayers = JSON.parse(JSON.stringify(players));
    shuffle(players);
    while(newPlayers[0]!==players[0]){
      var temp = newPlayers.shift();
      newPlayers.push(temp);
    }
    players = newPlayers
  }
  
 function validatePlayerNames(){
    var playerNameValidation = 0;
    players.forEach(function removeSpaces(playerName){if (!/\S/.test(playerName)){
    playerNameValidation++;
  }})
    return playerNameValidation;
  }
  
 function getPlayerNames() {
    players.push(
      document.getElementById("Player1").value,
      document.getElementById("Player2").value,
      document.getElementById("Player3").value,
      document.getElementById("Player4").value
    );
    players = players.filter(player => player != "");
  }
  
function addNewPlayer(){
    numberOfPlayers++;
    if(document.getElementById("playerThree").style.display == "none"){
      document.getElementById("playerThree").style = "display:block";
      document.getElementById("addPlayerThreeButton").style = "display:none";
    }
    else{
      document.getElementById("playerFour").style = "display:block";
      document.getElementById("addPlayerFourButton").style = "display:none";
      document.getElementById("removePlayerThreeButton").style = "display:none";
    }
  }
  
function removeCurrentPlayer(){
    numberOfPlayers--;
    if(document.getElementById("playerFour").style.display == "none"){
      document.getElementById("Player3").value = "";
      document.getElementById("playerThree").style = "display:none";
      document.getElementById("addPlayerThreeButton").style = "display:inline";
    }else{
      document.getElementById("Player4").value = "";
      document.getElementById("playerFour").style = "display:none";
      document.getElementById("addPlayerFourButton").style = "display:inline";
      document.getElementById("removePlayerThreeButton").style = "display:inline";
    }
  }
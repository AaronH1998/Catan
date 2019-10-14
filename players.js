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
    players.forEach(function removeSpaces(playerName){if (!/\S/.test(playerName)){playerNameValidation++;}})
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

    if(document.getElementById("playerThree").style.visibility == "hidden"){
      document.getElementById("playerThree").style = "visibility: visible";
      document.getElementById("addPlayerThreeButton").style = "display:none";
    }
    else{
      document.getElementById("playerFour").style = "visibility: visible";
      document.getElementById("addPlayerFourButton").style = "display:none";
      document.getElementById("removePlayerThreeButton").style = "display:none";
    }

  }
  
function removeCurrentPlayer(){
    numberOfPlayers--;
    
    if(document.getElementById("playerFour").style.visibility == "hidden"){
      document.getElementById("Player3").value = "";
      document.getElementById("playerThree").style = "visibility:hidden";
      document.getElementById("addPlayerThreeButton").style = "display:inline";
    }else{
      document.getElementById("Player4").value = "";
      document.getElementById("playerFour").style = "visibility:hidden";
      document.getElementById("addPlayerFourButton").style = "display:inline";
      document.getElementById("removePlayerThreeButton").style = "display:inline";
    }

  }
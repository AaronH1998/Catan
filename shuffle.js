function shuffle(myArray) {
  var i,
    r,
    l = myArray.length;
    
  while (l) {
    i = Math.floor(Math.random() * l--);
    r = myArray[l];
    myArray[l] = myArray[i];
    myArray[i] = r;
  }

  return myArray;
}

function shuffleEventCards() {
  document.getElementById("displayPlayerName").innerHTML = "";
  document.getElementById("number").innerHTML = "";
  document.getElementById("event").innerHTML = "";
  showNewYear();
  var diceRolls = [];
  var events = [];

  for(number in diceRollDictionary){
    myNumber = diceRollDictionary[number];    

    for(var i = 0; i < myNumber.occurrences; i++){
      diceRolls.push(myNumber.diceRoll);
    }
  }
  shuffle(diceRolls);

  for(event in eventsDictionary){
    myEvent = eventsDictionary[event];

    for(var j = 0; j < myEvent.occurrences; j++){
      events.push({title:myEvent.title, description:myEvent.description});
    }
  }

  shuffle(events);

  eventCards = diceRolls.map((value, index) =>
   ({diceRoll:value, event: events[index] }));

  for(var k = 0; k < 6; k++){
    eventCards.push({diceRoll:7, event:{title: "Robber Attacks!", description:"Robber attacks<br>1. Each player with more  than 7 cards must discard half (rounded down).<br>2. Move the robber. Draw a random resource card from any 1 player with a settlement and/or city next to the robber's new hex."}});
  }

  shuffle(eventCards);
}  


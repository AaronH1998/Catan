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

function shuffleEventCards(numbersRandom, eventsRandom) {
    document.getElementById("displayPlayerName").innerHTML = "";
    document.getElementById("number").innerHTML = "";
    document.getElementById("new").innerHTML = "Happy New Year settlers! Claim the first resource of this bountiful year!";
    numbersRandom.push(2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,10,10,10,11,11,12);
    eventsRandom.push(
      {title:"Epidemic", description: "Each player receives only 1 resource for each of his cities that produces this turn."},
      {title:"Epidemic", description: "Each player receives only 1 resource for each of his cities that produces this turn."},
      {title:"Earthquake", description: 'Each player turns 1 of his roads sideways. You may not build roads until your turned road is repaired. The repairs cost is 1 lumber and 1 brick. Roads turned sideways are still counted towards the "longest road".'},
      {title:"Good Neighbours", description: "Each player gives the player to his left 1 resource of the giver's choice (if he has one)."},
      {title: "Tournament", description: "The player(s) with the most knight cards revealed takes 1 resources of his choice from the bank."},
      {title: "Trade Advantage", description: 'The player with the "Longest Road" card (or the player with the most roads if not claimed) may take one resource from any player.'},
      {title: "Calm Seas", description: "The player(s) with the most harbours receives 1 resources card of their choice from the bank."},
      {title: "Calm Seas", description:"The player(s) with the most harbours receives 1 resources card of their choice from the bank."},
      {title: "Robber Flees", description: "The robber returns to the desert. Do not draw a card from any player."},
      {title: "Robber Flees", description: "The robber returns to the desert. Do not draw a card from any player."},
      {title: "Neighbourly Assistance", description: "The player(s) with the most victory points give(s) one player with fewer victory points 1 resource card of their choice. If a giver doesn't have a resource card to give, that giver ignores this event."},
      {title: "Neighbourly Assistance", description: "The player(s) with the most victory points give(s) one player with fewer victory points 1 resource card of their choice. If a giver doesn't have a resource card to give, that giver ignores this event."},
      {title: "Conflict", description: 'The player with the "Largest Army" (if not claimed, the single player with the most knight cards) takes 1 resource card at random from any one player.'},
      {title: "Plentiful Year", description: "Each player may take 1 resource of their choice from the bank."},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"},
      {title: "Catan Prospers", description: "The settlers labour. Catan prospers!"}
    );
    shuffle(numbersRandom);
    shuffle(eventsRandom);
    numbersRandom.splice(0, 5);
  }  
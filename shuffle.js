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
      "Epidemic",
      "Epidemic",
      "Earthquake",
      "Good Neighbours",
      "Tournament",
      "Trade Advantage",
      "Calm Seas",
      "Calm Seas",
      "Robber Flees",
      "Robber Flees",
      "Neighbourly Assistance",
      "Neighbourly Assistance",
      "Conflict",
      "Plentiful Year",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers",
      "Catan Prospers"
    );
    shuffle(numbersRandom);
    shuffle(eventsRandom);
    numbersRandom.splice(0, 5);
  }  
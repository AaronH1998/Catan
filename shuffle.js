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
    document.getElementById("newYear").innerHTML = "Happy New Year settlers! Claim the first resource of this bountiful year!";
    numbersRandom.push(2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,10,10,10,11,11,12);

    for(event in eventLibrary){
      var myEvent = eventLibrary[event];

      for(var i = 0; i < myEvent.occurrences; i++){
        eventsRandom.push({title: myEvent.title, description: myEvent.description});
      }
    }


    shuffle(numbersRandom);
    shuffle(eventsRandom);
    numbersRandom.splice(0, 5);
  }  


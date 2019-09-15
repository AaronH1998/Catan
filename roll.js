function rollEvent(eventList) {
    poppedEventList = eventList.pop();
    document.getElementById("event").innerHTML =
      "<b>" + poppedEventList + "</b>" + "</br>";
    if (poppedEventList == "Epidemic") {
      document.getElementById("event").innerHTML +=
        "Each player receives only 1 resource for each of his cities that produces this turn.";
    } else if (poppedEventList == "Earthquake") {
      document.getElementById("event").innerHTML +=
        'Each player turns 1 of his roads sideways. You may not build roads until your turned road is repaired. The repairs cost is 1 lumber and 1 brick. Roads turned sideways are still counted towards the "longest road".';
    } else if (poppedEventList == "Good Neighbours") {
      document.getElementById("event").innerHTML +=
        "Each player gives the player to his left 1 resource of the giver's choice (if he has one).";
    } else if (poppedEventList == "Tournament") {
      document.getElementById("event").innerHTML +=
        "The player(s) with the most knight cards revealed takes 1 resources of his choice from the bank.";
    } else if (poppedEventList == "Trade Advantage") {
      document.getElementById("event").innerHTML +=
        'The player with the "Longest Road" card (or the player with the most roads if not claimed) may take one resource from any player.';
    } else if (poppedEventList == "Calm Seas") {
      document.getElementById("event").innerHTML +=
        "The player(s) with the most harbours receives 1 resources card of their choice from the bank.";
    } else if (poppedEventList == "Robber Flees") {
      document.getElementById("event").innerHTML +=
        "The robber returns to the desert. Do not draw a card from any player.";
    } else if (poppedEventList == "Neighbourly Assistance") {
      document.getElementById("event").innerHTML +=
        "The player(s) with the most victory points give(s) one player with fewer victory points 1 resource card of their choice. If a giver doesn't have a resource card to give, that giver ignores this event.";
    } else if (poppedEventList == "Conflict") {
      document.getElementById("event").innerHTML +=
        'The player with the "Largest Army" (if not claimed, the single player with the most knight cards) takes 1 resource card at random from any one player.';
    } else if (poppedEventList == "Plentiful Year") {
      document.getElementById("event").innerHTML +=
        "Each player may take 1 resource of their choice from the bank.";
    } else {
      document.getElementById("event").innerHTML +=
        "The settlers labour. Catan prospers!";
    }
  }
  
function rollNumber(numberList) {
    rolledNumber = numberList.pop();
    document.getElementById("number").innerHTML = rolledNumber.toString();
    return rolledNumber;
  }
  
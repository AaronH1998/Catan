function rollEvent() {
  currentEventCard = eventCards.pop();
  document.getElementById("event").innerHTML = 
  "<b>" + currentEventCard.event.title + "</b>" + "<br/>" + currentEventCard.event.description;
  document.getElementById("number").innerHTML = currentEventCard.diceRoll;
}

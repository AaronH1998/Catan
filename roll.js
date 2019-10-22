function rollEvent(eventList) {
    poppedEventList = eventList.pop();
    document.getElementById("event").innerHTML = "<b>" + poppedEventList.title + "</b>" + "<br/>" + poppedEventList.description;
  }
  
function rollNumber(numberList) {
    rolledNumber = numberList.pop();
    document.getElementById("number").innerHTML = rolledNumber.toString();
    return rolledNumber;
  }
  
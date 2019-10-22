var numbers = [];
var events = [];
var players = [];
var playerCounter = 0;
var nextPlayerCounter = 0;
var numberOfPlayers = 2;
var numberLibrary = [
    {diceRoll: 2, occurrences: 1},
    {diceRoll: 3, occurrences: 2},
    {diceRoll: 4, occurrences: 3},
    {diceRoll: 5, occurrences: 4},
    {diceRoll: 6, occurrences: 5},
    {diceRoll: 7, occurrences: 6},
    {diceRoll: 8, occurrences: 5},
    {diceRoll: 9, occurrences: 4},
    {diceRoll: 10, occurrences: 3},
    {diceRoll: 11, occurrences: 2},
    {diceRoll: 12, occurrences: 1}
]
var eventLibrary = [
    {title:"Epidemic", occurrences: 2, description: "Each player receives only 1 resource for each of his cities that produces this turn."},
    {title:"Earthquake", occurrences: 1, description: 'Each player turns 1 of his roads sideways. You may not build roads until your turned road is repaired. The repairs cost is 1 lumber and 1 brick. Roads turned sideways are still counted towards the "longest road".'},
    {title:"Good Neighbours", occurrences: 1, description: "Each player gives the player to his left 1 resource of the giver's choice (if he has one)."},
    {title: "Tournament", occurrences: 1,  description: "The player(s) with the most knight cards revealed takes 1 resources of his choice from the bank."},
    {title: "Trade Advantage", occurrences: 1, description: 'The player with the "Longest Road" card (or the player with the most roads if not claimed) may take one resource from any player.'},
    {title: "Calm Seas", occurrences: 2, description: "The player(s) with the most harbours receives 1 resources card of their choice from the bank."},
    {title: "Robber Flees", occurrences: 2, description: "The robber returns to the desert. Do not draw a card from any player."},
    {title: "Neighbourly Assistance", occurrences: 2, description: "The player(s) with the most victory points give(s) one player with fewer victory points 1 resource card of their choice. If a giver doesn't have a resource card to give, that giver ignores this event."},
    {title: "Conflict", occurrences: 1, description: 'The player with the "Largest Army" (if not claimed, the single player with the most knight cards) takes 1 resource card at random from any one player.'},
    {title: "Plentiful Year", occurrences: 1, description: "Each player may take 1 resource of their choice from the bank."},
    {title: "Catan Prospers", occurrences: 16, description: "The settlers labour. Catan prospers!"}
]


window.onbeforeunload = function() { return ""; };


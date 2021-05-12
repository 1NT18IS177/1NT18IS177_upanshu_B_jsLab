var win = parseInt(prompt("enter wins: "));
var draw = parseInt(prompt("enter draws: "));
var loss = parseInt(prompt("enter losses: "));

points = () => (win * 3) + (draw * 1) + (loss * 0);


alert("the total points are: " + points());

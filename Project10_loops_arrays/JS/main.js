//WHILE LOOP FUNCTION//
function Call_Loop() {
    var Digit = "";//"Digit" becomes variable
    var X = 1;//'X' is variable with value of 1
    while (X < 11) {//This states that while 'X' is less than 11 do the next step. if not, stop.
        Digit += "<br>" + X;//Variable 'Digit' adds 'X' and adds a <br>
        X++;//'X' increases its value by 1 each loop
    }
    document.getElementById("Loop").innerHTML = Digit;// outputs the value of 'Digit' when loop is exited
}

//FOR LOOP FUNCTION//
var Player = ["Lillard", "LeBron", "Antentokounmpo", "Embid", "Jokic", "Curry", "Morant", "Durant"];
var Content = "";
var Y;//'Y' represents different spots inside our array(We have 8. 0-7)
function for_Loop() {
    for (Y = 0; Y < Player.length; Y++) {//'Y' increments by one each loop, while it is less than variable length
        Content += Player[Y] + "<br>";//break after each line/input
    }
    document.getElementById("List_of_Players").innerHTML = Content;//output variable content
}

//ARRAY WITHIN A FUNCTION//
function player_scoringattribute() {//Function to connect to on HTML
    var wayof_Scoring = [];
    wayof_Scoring[0]="Free Throw";//Each 'wayof_Scoring' is a variable, with a different value on each one
    wayof_Scoring[1]="Layup";
    wayof_Scoring[2]="Three Pointer";
    wayof_Scoring[3]="Dunk";
    document.getElementById("Score").innerHTML = "Damian Lillard wins the game, with a " + wayof_Scoring[2] + " at the end of regulation.";//Whatever number is inside the brackets '[]' determines what will be filled into the variables spot, being that there are multiple with there own value
}

//CONST KEYWORD FUNCTION//
function constant_function() {
    const NBA_Player = {team: "Blazers", year: 10, number: 0, name: "Damian Lillard", height: "6 foot 3"};
    NBA_Player.height = "6 foot 2";
    NBA_Player.year = 10;
    document.getElementById("Constant").innerHTML = "The greatest Portland Trail " + NBA_Player.team + " player is " + NBA_Player.height + ", who is in year " + NBA_Player.year + ".";
}

//LET KEYWORD//
function let_Function() {
    let X = 57//let is a local variable
    document.getElementById("let").innerHTML = X//display 'X'
}

//RETURN STATEMENT//
function return_Function() {
    document.getElementById("return").innerHTML = Math.PI;//Returns the value of PI
}

//OBJECT FUNCTION W PROPERTIES AND A METHOD//
let whip = {
    make: "Ford ",
    model: " F-150 Raptor ",
    year: "2021 ",
    color: "Burnt Orange ",
    interior: "Leather ",
    tires: "35 ",
    description : function () {
        return "My dream car is a " + this.year + this.make + this.model + "with " + this.interior + "seats, on stock " + this.tires + "inch tires. Preferably with a " + this.color + "color.";
    }
};
document.getElementById("whip").innerHTML = whip.description();

//BREAK STATEMENT (LOOP)//
let text = "";
for (let i = 0; i < 11; i++) {
    if (i ==10) break;//once i equals ten, loop breaks
    if (i ==4) continue;//once i is eual to four, "jump" over it
    text += i + "<br>";
}
document.getElementById("txt").innerHTML = text;//output variable 'text'
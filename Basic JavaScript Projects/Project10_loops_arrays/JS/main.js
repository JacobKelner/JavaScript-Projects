//LOOP FUNCTION//
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//FOR LOOP FUNCTION//
var Player = ["Lillard", "LeBron", "Antentokounmpo", "Embid", "Jokic", "Curry", "Morant", "Durant"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Player.length; Y++) {
        Content += Player[Y] + "<br>";
    }
    document.getElementById("List_of_Players").innerHTML = Content;
}

//ARRAY WITHIN A FUNCTION//
function player_scoringattribute() {
    var wayof_Scoring = [];
    wayof_Scoring[0]="Free Throw";
    wayof_Scoring[1]="Layup";
    wayof_Scoring[2]="Three Pointer";
    wayof_Scoring[3]="Dunk";
    document.getElementById("Score").innerHTML = "Damian Lillard wins the game, with a " + wayof_Scoring[2] + " at the end of regulation.";
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
    let X = 57
    document.getElementById("let").innerHTML = X
}

//RETURN STATEMENT//
function return_Function() {
    document.getElementById("return").innerHTML = Math.PI;
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
    if (i ==10) break;
    if (i ==4) continue;
    text += i + "<br>";
}
document.getElementById("txt").innerHTML = text;
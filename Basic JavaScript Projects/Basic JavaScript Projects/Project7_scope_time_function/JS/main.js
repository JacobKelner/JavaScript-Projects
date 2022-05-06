//Global Variable//
var X=6;
function Add_numbers1() {
    document.getElementById("number1").innerHTML = (1 + X);//adds one to x's value(6)
}

//Local variable//
function Add_numbers2() {
    Y=54
    document.getElementById("number2").innerHTML = (Y - 2);
}

//View why variable wont display in console.log//
function Add_numbers3() {
    console.log(Y + 7);//Y isnt defined 
}
Add_numbers3()

function get_time() {
    if (new Date().getHours() < 22) {//if time is earlier than 10pm
        document.getElementById("time").innerHTML = "How are you today?";//any time before 10pm displays quote
    }
}

//MY OWN IF STATEMENT//

function if_statement() {
    
    if (new Date().getHours() > 18) {
        document.getElementById("if").innerHTML = "You should go to sleep";
    }
}

//ANOTHER IF STATEMENT//

function another_statement() {
    if (1 < 3) {
        document.getElementById("variablenumber").innerHTML = "The number on the left is smaller"
    }
}

//ELSE STAEMENT//

function Year_function() {
    Year = document.getElementById("Year").value;
if (Year <= 2001) {//anything later than 2001 displays else
    Drink = "You are old enough to drink";
}
else {
    Drink = "You are not old enough to drink";
}
document.getElementById("mod").innerHTML = Drink;//displays drink variable depending on input
}

//COURSE ELSE IF STATEMENT//
function Time_function() {
    var Time = new Date().getHours();//gets time of day
    var Reply;
    if (Time < 12 == Time > 0) {//checks if this statement is true, if not, continue onto the next one (else if).
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {//displays below quote if between 12 and 6 pm
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is night time";//displays this quote if time is anything other than "if" time requirments, or the "else" time requierments
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
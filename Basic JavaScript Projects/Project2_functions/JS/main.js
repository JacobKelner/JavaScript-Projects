function Msg1() { //Msg1() gets plugged into tghe button onclick element on HTML
    document.getElementById('myText').innerHTML = 'Hey, Good Job!'; //myText displays the following sentence when used with id on html
}
                                        //Either the top or bottom sentence will appear depending on which button is clicked on display
function Msg2() {
    document.getElementById('myText').innerHTML = 'Try message 1 again...'; //myText displays the following sentence when used with id on html
}

//id element challenge and +=operator
function myFunction() { //myFunction() to be called by onclick in HTML link
    var sentence = "I currently learning";
    sentence += " a lot on this JavaScript course!";
    document.getElementById("Concatenate").innerHTML = sentence;//sentence connects to end of var sentence via sentence += operator
}
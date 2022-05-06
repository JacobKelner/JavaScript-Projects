//connect strings function//
function complete_sentence() {
    var p1 = "This will ";
    var p2 = "become an ";
    var p3 = "entire sentence, ";
    var p4 = "even though in the ";//p1-p6 are all variables
    var p5 = "code, it seems ";
    var p6 = "to be broken up."
    var whole_sentence = p1.concat(p2,p3,p4,p5,p6);//each variable gets added to the end of the previous variable in the order of the parentheses//
    document.getElementById("random").innerHTML = whole_sentence;
}
//slice method//
function slice_function() {
    var Sentence = "The basketball player, Damian Lillard, is a top 2 point guard.";
    var Section = Sentence.slice(23, 37);//does not display every letter before 23, and after 37
    document.getElementById("slice").innerHTML = Section;//variable "Section" gets dislayed
}
//toUpperCase method//
function toUpper_function() {
    var text = "All this text will be capitalized via toUpperCase!";
    var result = text.toUpperCase();//causes all text to become capitalized
    document.getElementById("upper").innerHTML = result;//displays variable result
}
//Search Method//
function search_function() {
    var text = "I am searching for the position of something specific";//var is global, but this var is inside the curly brackets, so the duplicate "text" variable has no conflict
    var position = text.search(/position/);
    document.getElementById("search").innerHTML = position;
}

//toString() method//
function string_Method() {
    var A = 619;
    document.getElementById("Numbertostring").innerHTML = A.toString();
}

//toPrecision Method//
function precision_function() {
    var T = 12345.678923;
    document.getElementById("precision").innerHTML = T.toPrecision(10);//displays variable "T", but only the first 10 numbers worth
}

//toFixed Method//
function tofixed_function() {
    let num = 6.19;//let variable is local, while var is global
    let n = num.toFixed(1);//rounds 1 number after decimal up
    document.getElementById("trial").innerHTML = n;//number "6.19" gets rounded up to "6.2"
}

//VALUEOF METHOD//
function value_Function() {
    var text = "Howdy, partner!";
    var result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}
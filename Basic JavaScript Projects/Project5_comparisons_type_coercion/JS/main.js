document.write(typeof 3);//displays "number"

document.write(" 10" + 5);//displays "10" with "5" tacked onto the end making "105"

function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}

function my_Nextfunction() {
    document.getElementById("true").innerHTML= isNaN("String is");//displays true since "string" is not a number
}

function my_Lastfunction() {
    document.getElementById("false").innerHTML= isNaN(007);//displays false since "007" is a number, not a string
}
function my_Infinityfunction() {
let y = -2E313;
let x = 2E313;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("demo2").innerHTML = y;
}
function my_Booleanfunction() {
    document.getElementById("Tboolean").innerHTML = 10>9
}

function my_Boolean2function() {
    document.getElementById("Fboolean").innerHTML = 10<9
}

console.log(115+32);//displays the result in the console

console.log(115>324);//displays false in console

function my_Doubleequalfunction () {
    document.getElementById("equal").innerHTML=10==10//displays true because left and right side of "==" symbol are equal
}

function my_Falseequalfunction() {
    document.getElementById("equal2").innerHTML=10==12//displays false because both sides of equal signs are not equal
}
function my_Triplefunction() {
  X=10;
  Y=10;
    document.getElementById("tripletrue").innerHTML = X===Y;//displays true because the data types and value are the same 
}

function my_Falsetriplefunction() {
    Date=2022;
    A=2021;
    document.getElementById("triplefalse").innerHTML = Date===A;
}

function my_Differentvalue() {
    J=52;
    K=37;
    document.getElementById("value").innerHTML = J===K
}






function my_Randomfunction() {//currently not working
    B=82;
    B="82";
    document.getElementById("differentfalse").innerHTML = B===B;
}

function my_Andfunction() {
    document.getElementById("and").innerHTML = (5>2&&10>4);//displays true since both statements are true
}

function my_Andfalsefunction() {
    document.getElementById("andfalse").innerHTML = (5>2&&2>4);//displays false since none of the statements are true
}

function my_Orfunction() {
    document.getElementById("or").innerHTML = (5>10 || 10>4)//displays true since at least one of them is true
}

function my_Orfalsefunction() {
    document.getElementById("orfalse").innerHTML = (5>10 || 3>4)//displays false since neither are true
}

function not_function() {
    document.getElementById("Not").innerHTML = ! (15>10);
}

function not_functiontrue() {
    document.getElementById("truenot").innerHTML = ! (5>10);
}

function typeof_function() {
    document.getElementById("typeof").innerHTML = typeof "name"
}

function typeof_coercion() {
    document.getElementById("tackon").innerHTML = ("One hundred and" +7);
}
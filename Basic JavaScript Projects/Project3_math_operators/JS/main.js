function myFunction() {
    var y = document.getElementById("txt1").value;//asigned value on html page
    var z = document.getElementById("txt2").value;//assigned value on html page
    var x = +y + +z;
    document.getElementById("demo").innerHTML = x;//displays the total sum of y and z that get their value on html page
  }

 
  function Subtract() {
      var a = document.getElementById("txtA").value;//get value assigned on html
      var b = document.getElementById("txtB").value;//gets value assigned on html
      var result = parseInt(a) - parseInt(b);
      alert(result);//values of a and b comes pre filled with values from html, but can be edited. Result comes after you click submit in an alert window
  }

  function multiplication() {
      var simple_Math = 6 * 8;//simple_math equals 48
      document.getElementById("Math").innerHTML="6 * 8 = " + simple_Math;//simple math is then added onto the and of equation - outside of quotation
  }
  function division() {
      var simple_math = 81 / 9;
      document.getElementById("math").innerHTML="81 / 9 = " + simple_math;
  }

  function more_maths() {
      var simple_Maths=(1+2) * 10 / 2 - 5;
      document.getElementById("Maths").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Maths;//this is what is displayed after being clicked, with the answer added onto the end
  }

function modulus_Operator() {
    var simple_Math=25 % 6;// % divides then returns the remainder
    document.getElementById("Mathh").innerHTML="When you divide 25 by 6 you have a remainder of: " + simple_Math;//simple math represents the remiander of 25 divided by 6 (1)
}

function negation_Operation() {
    var x = 10;
    document.getElementById("negation").innerHTML=-x;// reutrns opposite or negative form of something, this something bein  10 (-10)
}

function increment_Operation() {
    var x = 5;
    x++;
    document.write(x);//returns x (5) to have 1 added to it
}

function decrement_Operation() {
    var x = 5.25;
    x--;
    document.write(x);//returns x (5.25) to be subtracted by 1
}

window.alert(Math.random() * 100);//random window alert varying between 0 and 100 including floating points

function math_Object() {
    document.getElementById("Constant").innerHTML=Math.PI;//this specific math object is pi 
}

function math_Random(min, max) {
   document.getElementById("Random").innerHTML = Math.floor(Math.random() * 100);
}
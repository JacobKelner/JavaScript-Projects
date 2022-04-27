function Ride_Function() {
    var Height, Can_ride;//variables
    Height = document.getElementById("Height").value;//plugs into html doc
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//user inputs "Height" variable 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";//outputs "Can_ride" depending on user input
}

function Vote_Function() {
    var Age, Can_vote;//variables
    Age = document.getElementById("Age").value;//age is a variable based on user input
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";//Outputs left or right side of ":" symbol based on if age falls under less than 18 or greater than 
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";//"Can_vote gets value from above line and displays with " to vote." tacked onto the end 

}


//OBJECT PROGRAM //
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2015, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


//My own Object Constructor function//
function Dog(Breed, Age, Color) {
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}

var Bronson = new Dog("Rottweiler", 7, "Black and Brown");//attributtes of variable "Bronson"
var Bailey = new Dog("Golden Retriever", 14, "Golden Yellow");//attributes of variable "Bailey"
var Kona = new Dog("Pitbull-mix", 8, "Tan and Black");
function dogFunction() {
    document.getElementById("New_and_This").innerHTML = "Bronson is a " + Bronson.Dog_Breed + " who is " + Bronson.Dog_Age + " years of age and is colored " + Bronson.Dog_Color;//adds variables together with quotes into string
}



//NESTED FUNCTION//
function nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;//startinjg point equals 9
        function Plus_one() {Starting_point += 1;}//nested function, add one to startingpoint variable
        Plus_one();
        return Starting_point;//displays starting point
    }
}
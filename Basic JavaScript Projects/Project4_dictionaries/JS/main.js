function my_Dictionary() {
    var Animal = {//Animal could be explained as the title of our dictionary
        species: "Dog",
        color: "Black",
        breed: "Rottweiler",//each of these keys have a value associated to it
        age: 7,
        sound: "Ruff!",
    };
    delete Animal.breed;//tells our dictionary to delete breed key and value
    document.getElementById("Dictionary").innerHTML=Animal.breed;//any key after the "." will output the value of said key
}
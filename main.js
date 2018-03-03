//console.log('hello chris')

var favAnimal= {
    name:"chris", 
    animal: "cat"

};

//console.log("favAnimal", favAnimal.animal);

var instructorPets = [
    {instructorName: "Chris",
    petName: "whiskey",
    animalType: "evil-cat",
    isFavorite: true},

    {instructorName: "Zoe",
    petName: "frankie",
    animalType: "sweet-dog",
    isFavorite: true},


 
    {instructorName: "Lauren",
    petName: "seymour",
    animalType: "cute-dog",
    isFavorite: false},


 
    {instructorName: "Callan",
    petName: "biff",
    animalType: "black-dog",
    isFavorite: true}
];

//console.log("instructorPets",instructorPets);
var petDiv = document.getElementById("pet-names");

for (var i=0; i<instructorPets.length; i++){
    var petStr =instructorPets[i].petName;
    var display = "<h1>" + petStr + "</h1>";
    petDiv.innerHTML += display;
    }
    


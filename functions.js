console.log("functions");

//funstions expressions
var a = function(){
    console.log("a",3);
};

//function declarations 
function b () {
    console.log("b",2)
}

var num = 3;
function numPrinter(monkeybutt){
    console.log("my number: ",monkeybutt)
};

numPrinter(num);
numPrinter(4);
numPrinter(6);

function cat(){
    return "love them"
}
var message = cat();
console.log("message",message);

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

function domStringMaker(animalArray){
    for (var i=0; i<animalArray.length; i++){
        var animalString = "";
        if (animalArray[i].isFavorite){
            animalString += '<div class="pet isFavorite">';
        } else {
            animalString += '<div class= "pets isNotFavorite">';
        }
        animalString += '<div class="pets">';
        animalString += "<h1>" + animalArray[i].petName + "</h1>";
        animalString += "<h3> Owner: " + animalArray[i].instructorName + "</h3>";
        animalString += "<h3> Type: " + animalArray[i].animalType + "</h3>";
        animalString += '</div>';
        console.log(animalString, "pet-names");
    }

    }

function printToDom(stringToPrint,divId){
    var myDiv = document.getElementById(divId);
    console.log("mydiv", myDiv);
    myDiv.innerHTML += stringToPrint;

}

domStringMaker(instructorPets);


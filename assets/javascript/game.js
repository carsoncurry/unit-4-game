// Initial pseudocode
// Create a crystal selector game:

// display four different stone images on the page
// display a random number (19 - 120) at the start of the game
    // THIS NEEDS TO BE RANDOM EACH ROUND
// assign each image a different value (1 - 12) that only displays when 
    // display this using an alert
    // when clicked, update the user's score
    // THESE VALUES SHOULD CHANGE EACH ROUND
// create a win function for when the user clicks on the correct amount of crystals to reach the goal
// create a lose function if the user goes over the random number
// automatically restart the game and score if the user wins or loses
// track wins and losses after a reset

// this variable will set the "targetNumber" that will eventually be randomized
var targetNumber = 53;

// these variables will track wins and losses
var winCounter = 0;
var lossCounter = 0;

// this will eventually be able to show the random target number to the user
$("#number-to-guess").text(targetNumber);

// this variable will serve as a counter to track the number of clicks made on an image
var counter = 0;

// this code selects a number between 1 and 12 for each image
// this number will be set at the start of the game
var numberOptions = [10, 5, 3, 7];

// create a function for the game start and reset
// *Check jQuery syntax on this*
function startGame() {

    // restart targetNumber to eventually be random
    targetNumber = 53;

    // reset the counter
    counter = 0;
}

for (var i = 0; i < numberOptions.length; i++) {

    // for each iteration we will create an imageStone
    var imageStone = $("<img>");

    // each image will be given the class ".stone-image" to activate CSS
    imageStone.addClass("stone-image");

    // each imageStone will be given a link to the image
    imageStone.attr("src", "https://qph.fs.quoracdn.net/main-qimg-eaa64a24f42ac4369c9e1cc599dfec19");

    // each imageStone will be given a data attribute called data-stone
    // right now, it's equal to the array value
    imageStone.attr("data-stonevalue", numberOptions[i]);
    // each image will get added to the div in the html
    $("#stones").append(imageStone);
}

// this will be our onclick function to track when the user clicks an image
$(".stone-image").on("click", function() {

    var stoneValue = ($(this).attr("data-stonevalue"));
    stoneValue = parseInt(stoneValue);
    // this ensures the click counter raises each time
    // this will raise the counter by a random increment instead of a set number each time
    counter += stoneValue;

    // this is the alert that shows the user their current score
    alert("New score: " + counter);

    // this logic checks if the click counter matches the targetNumber
    if (counter === targetNumber) {

        // add to the win counter
        winCounter++;

        // this informs the user that they have won
        alert("You win!");

        // update the win counter in the HTML
        document.getElementById("win-counter").innerHTML = winCounter;

        startGame();
    } 
    
    // this "else if" condition checks if the user clicks go over the targetNUmber
    else if (counter >= targetNumber) {

        // add to the loss counter
        lossCounter++;

        // this informs the user that they have lost
        alert ("You lose!");

        // update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = lossCounter;
        
        // restarts the game
        startGame();
    }
});

// starts the game
startGame();
var targetNumber = 19 + Math.floor(Math.random() * 120);
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/orange-stone.png", "./assets/images/red-stone.png", "./assets/images/yellow-stone.png", "./assets/images/blue-stone.png", "./assets/images/purple-stone.png", "./assets/images/green-stone.png"];

$("#number-to-guess").text(targetNumber);

function startGame () {
    for (var i = 0; i < images.length; i++) {

        var imageStone = $("<img>");

        imageStone.addClass("stone-image");

        imageStone.attr("src", images[i]);

        imageStone.attr("height", "200");

        imageStone.attr("value", Math.floor(Math.random() * 13 + 2));

        $(".stones").append(imageStone);
    };
    
};

function resetGame () {

    counter = 0;
    targetNumber = 19 + Math.floor(Math.random() * 120);
    $("#number-to-guess").text(targetNumber);
    $(".stone-images").clear();

    startGame();

}

startGame();

$(".stone-image").on("click", function() {

    var stoneValue = ($(this).attr("value"));
    stoneValue = parseInt(stoneValue);

    counter += stoneValue;

    $("#current-score").text(counter);

    if (counter === targetNumber) {
        alert("You win!");

        wins++;

        $("#win-counter").text(wins);

        resetGame();

    } 
    
    else if (counter >= targetNumber) {
        
        alert("You lose!");

        losses++;

        $("#loss-counter").text(losses);

        resetGame();

    }

});

var gameIsOn = false;

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

$(document).on("keypress", function(event){
    if (gameIsOn == false){
        gameIsOn = true;
        nextSequence();
    }
} );

$(".btn").on("click", function(event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playMusic(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

  } );

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour).fadeOut(200).fadeIn(200);
    playMusic(randomChosenColour);
}

function playMusic(color){
    var filepath = "./sounds/" + color + ".mp3";
    var audio = new Audio(filepath);
    //audio.play();
}

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
    $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        }, 300);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver()
    }
function startOver(){
    level = 0;
    gamePattern = [];
    gameIsOn = false;
}

}
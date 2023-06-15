for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonClick = this.innerHTML;
        makeSound(buttonClick);
        
        /*var audio = new Audio('./sounds/crash.mp3');
        audio.play()*/
    })
}

document.addEventListener("keypress", function(event){
    console.log(event);
})

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play()
        break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play()
        break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play()
        break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play()
        break;
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play()
        break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play()
        break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play()
        break;

        default:
        break;
}
}

/*
function handleClick(){
    alert("got click")
}

function calculator(num1, num2, operator){
    operator(num1, num2);
}
function sub(num1, num2){
    return (num1 - num2)
}

function add(num1, num2){
    return (num1 + num2)
}

function multiply(num1, num2){
    return (num1 * num2)
}

function divide(num1, num2){
    return (num1 / num2)
} 
*/
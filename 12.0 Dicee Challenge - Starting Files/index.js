
    var player1 = (Math.random() * 6) + 1;
    var player2 = (Math.random() * 6) + 1;
    player1 = Math.floor(player1);
    player2 = Math.floor(player2);

    var setAttributePlayer1 = "./images/dice" + player1 + ".png";
    var setAttributePlayer2 = "./images/dice" + player2 + ".png";

    document.querySelector(".dice .img1").setAttribute("src", setAttributePlayer1);
    document.querySelector(".dice .img2").setAttribute("src", setAttributePlayer2);
    
    if (player1 > player2){
        document.querySelector("h1").innerHTML = "Player 1 Winner"
    }else if(player1 === player2){
        document.querySelector("h1").innerHTML = "Draw"
    }else{
        document.querySelector("h1").innerHTML = "Player 2 Winner"
    }
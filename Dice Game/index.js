var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
  var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
  var images1 = document.querySelectorAll("img")[0];
  images1.setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
  var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😎 Player 1 wins!";
  }

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "😁 player 2 wins!";
  }

  else {
    document.querySelector("h1").innerHTML = "No one wins 😑";
  }
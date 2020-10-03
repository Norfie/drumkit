for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll(".set button")[i].addEventListener("click", function() {
    var btnClass = this.classList[0];
    switchFunc(btnClass);
    makeAnimation(btnClass);
  });
}

document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  switchFunc(keyPressed);
  makeAnimation(keyPressed);

});

function switchFunc(key) {
  switch (key) {
    case "w": //crash
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a": //kick
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s": //snare
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d": //tom1
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j": //tom3
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "k": //tom2
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "l": //tom4
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
  }
}


function makeAnimation (key) {
  document.querySelector("." + key).classList.toggle("pressed");

  setTimeout (function () {
    document.querySelector("." + key).classList.toggle("pressed");
  }, 150);
}

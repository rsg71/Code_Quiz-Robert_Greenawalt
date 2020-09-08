var submit = document.getElementById("submit");
var allDoneScreen = document.getElementById("all-done-screen");
score = 6;

var initials = document.getElementById("initials");
var submissionResponse = document.getElementById("response");
var userInitials = localStorage.getItem("initials");

var highScoreScreen = document.getElementById("highscore-screen")
var goBack = document.getElementById("go-back");
var clearHighscores = document.getElementById("clear-highscores");



submit.addEventListener("click", function(event) {
    event.preventDefault();
    
    var response  = "nice "+ initials.value +" , and thank you";
    
    // submissionResponse.textContent = response;
    
    
    localStorage.setItem("initials", score);

    

    allDoneScreen.style.display = "none";
    
    highScoreScreen.classList.remove("hide");

});


goBack.addEventListener("click", function(event) {
    
});

clearHighscores.addEventListener("click", function(event) {
localStorage.clear();

});






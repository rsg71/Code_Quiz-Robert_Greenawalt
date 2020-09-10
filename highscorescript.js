var highScoreScreen = document.getElementById("highscore-screen")
var goBack = document.querySelector(".go-back");
var clearHighscores = document.getElementById("clear-highscores");
var userHighScore = document.getElementById("user-high-score");


function renderHighScore () {
    userHighScoreInitials = localStorage.getItem("initials");
    userHighScoreNumber = localStorage.getItem("score");
    
    if(userHighScoreInitials == null || userHighScoreNumber == null) {
        userHighScoreInitials.textContent = " ";
        userHighScoreNumber.textContent = " ";
    }

    userHighScore.textContent = userHighScoreInitials + " : " + userHighScoreNumber;
    
} 

renderHighScore();


clearHighscores.addEventListener("click", function(event) {
    localStorage.clear();
});






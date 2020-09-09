var highScoreScreen = document.getElementById("highscore-screen")
var goBack = document.getElementById("go-back");
var clearHighscores = document.getElementById("clear-highscores");
var userHighScore = document.getElementById("user-high-score");


function renderHighScore () {
    userHighScoreInitials = localStorage.getItem("initials");
    userHighScoreNumber = localStorage.getItem("score");
    
    userHighScore.textContent = userHighScoreInitials + " - " + userHighScoreNumber;
    
} 

renderHighScore();


// goBack.addEventListener("click", function(event) {
//     location.reload();

// ------------------------- need a way to get back to quiz game instead of location.reload ();--------------------
// });

clearHighscores.addEventListener("click", function(event) {
    localStorage.clear();
});






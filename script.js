//creating elements
var startScreen = document.getElementById("start-screen")
var startBtn = document.querySelector("#start-button");
var quiz = document.getElementById("quiz");

startBtn.addEventListener("click", initialize);
var gameOverScreen = document.getElementById("game-over-screen");
gameOverScreen.style.display = "none";



var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = 0;
var scoreAmount = document.getElementById("score");
var count = 100;

//list of questions
var questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choiceA: "javascript",
        choiceB: "scripted",
        choiceC: "script",
        choiceD: "js",
        correct: "C"
    },
    {
        question: "Choose the correct JavaScript syntax to change the content of the following HTML code:",
        choiceA: "document.getElement(“geek”).innerHTML=”I am a Geek”;",
        choiceB: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
        choiceC: "document.getId(“geek”)=”I am a Geek”;",
        choiceD: "document.getElementById(“geek”).innerHTML=I am a Geek;",
        correct: "B"
    },
    {
        question: "Which will display “GeeksforGeeks” in an alert box using JavaScript?",
        choiceA: "alertbox(“GeeksforGeeks”);",
        choiceB: "msg(“GeeksforGeeks”);",
        choiceC: "msgbox(“GeeksforGeeks”);",
        choiceD: "alert(“GeeksforGeeks”);",
        correct: "D"
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        choiceA: "script src=”geek.js”",
        choiceB: "script href=”geek.js",
        choiceC: "script ref=”geek.js”",
        choiceD: "script name=”geek.js”",
        correct: "A"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choiceA: "interface",
        choiceB: "throws",
        choiceC: "program",
        choiceD: "short",
        correct: "C"
    },
    {
        question: "Which built-in method returns the character at the specified index?",
        choiceA: "characterAt()",
        choiceB: "getCharAt()",
        choiceC: "charAt()",
        choiceD: "None of the above",
        correct: "C"
    },


]

//more variables
var lastQuestion = questions.length -1;
var runningQuestion = 0;



//changing display from start game button to actual game
function initialize () {
    startScreen.style.display = "none";
    startBtn.style.display = "none";
    quiz.classList.remove("hide");


    //counter
    intId = setInterval(countdown, 1000);
    var counter = document.querySelector("#time_remaining");

    function countdown() {
        count--;
        counter.textContent = "Time remaining: " + count;
        if(count === 0) {
            clearInterval(intId);
            GameOverScreen();
        }
        
    }

    renderQuestion ();

}

//render a question
function renderQuestion () {

    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question +"</p>";
    choiceA.innerHTML = q.choiceA ;
    choiceB.innerHTML = q.choiceB ;
    choiceC.innerHTML = q.choiceC ;
    choiceD.innerHTML = q.choiceD ;
}

////declaring the game over screen for the first time, so that it can be accessed if the counter hits 0
function GameOverScreen () {
    
            document.getElementById("quiz").className = "hide";
            gameOverScreen.classList.remove("hide");
            gameOverScreen.style.display = "block";

            var finalScore = document.getElementById("final-score");
            finalScore.textContent = "Your final score is " + score + " / 6";
            // 

            var submit = document.getElementById("submit");
            var initials = document.getElementById("initials");
            var highScoreScreen = document.getElementById("highscore-screen")
            var userHighScore = document.getElementById("user-high-score")
    

            submit.addEventListener("click", function(event) {
                event.preventDefault();
                    
                localStorage.setItem("initials", initials.value);
                localStorage.setItem("score", score);
            
                gameOverScreen.style.display = "none";
                
                highScoreScreen.classList.remove("hide");
    
                userHighScore.textContent = initials.value + " : " + score;
                
            
            });
            var clearHighscores = document.getElementById("clear-highscores");
            clearHighscores.addEventListener("click", function(event) {
                localStorage.clear();
            });
            
            var goBack = document.querySelector(".go-back");
            goBack.addEventListener("click", function () {
                startScreen.style.display = "block";
                startBtn.style.display = "block";
                quiz.style.display = "none";
                highScoreScreen.style.display = "none";
    
    
    
                location.reload()
            });
            
        }
// Game over screen ends here


function checkAnswer (answer) {
    // answerIsCorrect
    if ( answer == questions[runningQuestion].correct) {
        score ++;
        console.log(" score is " + score);
        scoreAmount.textContent = "Score: " + score + "/6";

    // answerIsWrong;
    } else {
        count = count - 10;
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion ++;
        renderQuestion();
    }
    else {
        clearInterval(intId);
        
        GameOverScreen();

        // ----------------------------------------------------------------------------------------------------------
        //below is what occurs after submit button is clicked
        var submit = document.getElementById("submit");
        var initials = document.getElementById("initials");
        var highScoreScreen = document.getElementById("highscore-screen")
        var userHighScore = document.getElementById("user-high-score")


        //submit button and the events that follow:
        submit.addEventListener("click", function(event) {
            event.preventDefault();
            
            //stores the values of initials and score
            localStorage.setItem("initials", initials.value);
            localStorage.setItem("score", score);
        

            //shows the relevant screen (the high score screen)
            gameOverScreen.style.display = "none";
            highScoreScreen.classList.remove("hide");

            userHighScore.textContent = initials.value + " : " + score;
            
        
        });

        //creation of the clear high scores button:
        var clearHighscores = document.getElementById("clear-highscores");
        clearHighscores.addEventListener("click", function(event) {
            localStorage.clear();
        });
        
        //creation of the go back button:
        var goBack = document.querySelector(".go-back");
        goBack.addEventListener("click", function () {
            startScreen.style.display = "block";
            startBtn.style.display = "block";
            quiz.style.display = "none";
            highScoreScreen.style.display = "none";



            location.reload()
        });
        
    }
}
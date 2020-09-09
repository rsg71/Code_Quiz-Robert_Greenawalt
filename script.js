//creating elements
var startScreen = document.getElementById("start-screen")
var startBtn = document.querySelector("#start-button");
var quiz = document.getElementById("quiz");

startBtn.addEventListener("click", initialize);
var allDoneScreen = document.getElementById("all-done-screen");
allDoneScreen.style.display = "none";



var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = 0;
var scoreAmount = document.getElementById("score");
var count = 100;

//create questions
var questions = [
    {
        question: "What is the capital of Brazil?",
        choiceA: "Sao Paolo",
        choiceB: "Correct",
        choiceC: "Rio de Janeiro",
        choiceD: "Recife",
        correct: "B"
    },
    {
        question: "Who is the tallest person ever?",
        choiceA: "Andre the Giant",
        choiceB: "Don Koehler",
        choiceC: "Xi Shun",
        choiceD: "Correct",
        correct: "D"
    },
    {
        question: "When was the lightbulb invented?",
        choiceA: "1879",
        choiceB: "1844",
        choiceC: "1867",
        choiceD: "1858",
        correct: "A"
    },
    {
        question: "How many eyes does a spider have?",
        choiceA: "Four",
        choiceB: "Two",
        choiceC: "Correct",
        choiceD: "Six",
        correct: "C"
    },
    {
        question: "What building is on the back of the $100 dollar bill?",
        choiceA: "Correct",
        choiceB: "United States Capitol",
        choiceC: "Supreme Court",
        choiceD: "Lincoln Memorial",
        correct: "A"
    },
    {
        question: "What does LASER stand for?",
        choiceA: "Light Amplified by Sending Emitted Rays",
        choiceB: "Light Aggregated Self Emitting Radiowaves",
        choiceC: "Light Amplified by Stimulated Emission of Rays",
        choiceD: "Correct",
        correct: "D"
    },


]

//more variables
var lastQuestion = questions.length -1;
var runningQuestion = 0;



//changing display from start game button to actual game
function initialize () {
    console.log("started")
    startScreen.style.display = "none";
    startBtn.style.display = "none";
    quiz.classList.remove("hide");


    //counter
    intId = setInterval(countdown, 1000);
    var counter = document.querySelector("#time_remaining");
    // var count = 100;

    function countdown() {
        count--;
        counter.textContent = "Time remaining: " + count;
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



function checkAnswer (answer) {
    if ( answer == questions[runningQuestion].correct) {
        score ++;
        console.log(" score is " + score);
        scoreAmount.textContent = "Score: " + score + "/6";

        // answerIsCorrect
    } else {
        // answerIsWrong;
        
        count = count - 10;
        console.log("anwer is wrong")
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion ++;
        renderQuestion();
    }
    else {
        console.log("endgame");
        clearInterval(intId);


        function showHighscoresScreen () {
    
            document.getElementById("quiz").className = "hide";
            allDoneScreen.classList.remove("hide");
            allDoneScreen.style.display = "block";

            var finalScore = document.getElementById("final-score");
            finalScore.textContent = "Your final score is " + score + " / 6";
        }
        
        showHighscoresScreen();
        console.log("getting there")

        // ----------------------------------------------------------------------------------------------------------
        //after submit button
        var submit = document.getElementById("submit");
        var initials = document.getElementById("initials");
        var highScoreScreen = document.getElementById("highscore-screen")
        var userHighScore = document.getElementById("user-high-score")


        submit.addEventListener("click", function(event) {
            event.preventDefault();
            
                
            localStorage.setItem("initials", initials.value);
            localStorage.setItem("score", score);
        
            allDoneScreen.style.display = "none";
            
            highScoreScreen.classList.remove("hide");

            userHighScore.textContent = initials.value + " - " + score;
            
        
        });
        var clearHighscores = document.getElementById("clear-highscores");
        clearHighscores.addEventListener("click", function(event) {
            localStorage.clear();
        });
        console.log("up here")
        
        var goBack = document.querySelector("#go-back");
        goBack.addEventListener("click", function () {
            startScreen.style.display = "block";
            startBtn.style.display = "block";
            quiz.style.display = "none";
            highScoreScreen.style.display = "none";



            location.reload()
        });
        
    }
}
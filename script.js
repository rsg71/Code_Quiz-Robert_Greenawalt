//creating elements

var startBtn = document.querySelector("#start-button");
var quiz = document.getElementById("quiz");

startBtn.addEventListener("click", initialize);


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

//variables
var lastQuestion = questions.length -1;
var runningQuestion = 0;


//changing display from start game button to actual game
function initialize() {
    console.log("started")
    startBtn.style.display = "none";
    quiz.classList.remove("hide");

    //counter
    var intId = setInterval(countdown, 1000);
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
    // var questionIndex = 0;

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
        clearInterval(intId);
        scoreRender ();
    }
}

function scoreRender () {
    scoreAmount.innerHTML = score;
}



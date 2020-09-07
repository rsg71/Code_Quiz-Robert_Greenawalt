var startBtn = document.querySelector("#start-button");
var gameContainerEl = document.getElementById("game");


startBtn.addEventListener("click", initialize);





function initialize() {
    console.log("started game")

    //changing display from start game button to actual game
    startBtn.style.display = "none";
    gameContainerEl.classList.remove("hide");



    //counter
    var intId = setInterval(countdown, 1000);
    var counter = document.querySelector("#time_remaining");
    var count = 100;

    function countdown() {
        count--;
        counter.textContent = "Time remaining: " + count;
    }

    setNextQuestion()

}



function setNextQuestion() {

    var questionIndex = 0;
    var q = questions[questionIndex];

    //setting title
    var questionTitleEl = document.getElementById("questionTitle");
    questionTitleEl.textContent = questions[questionIndex].questionTitle;
    document.body.appendChild[questionTitleEl]


    //setting answer choices
    var answerOptionsElOne = document.getElementById("choice1");
    answerOptionsElOne.textContent = questions[questionIndex].a1;
    document.body.appendChild[answerOptionsElOne];

    var answerOptionsElTwo = document.getElementById("choice2");
    answerOptionsElTwo.textContent = questions[questionIndex].a2;
    document.body.appendChild[answerOptionsElTwo];

    var answerOptionsElThree = document.getElementById("choice3");
    answerOptionsElThree.textContent = questions[questionIndex].a3;
    document.body.appendChild[answerOptionsElThree];

    var answerOptionsElFour = document.getElementById("choice4");
    answerOptionsElFour.textContent = questions[questionIndex].a4;
    document.body.appendChild[answerOptionsElFour];


    //event listeners in case user selects correct/wrong answer
    // var userChoice = answerOptionsElOne.addEventListener("click",nextQuestion);

    // function nextQuestion () {
    //     if userChoice = questions[questionIndex].correctAnswer
    //     alert("correct!");
        
    // }
    
    
    


    // var score = 0;
    //function checkAnswer (answer) {
        
    //     if(questions[questionIndex].correct == answer) {
    //         score ++;
    //         answerIsCorrect();
    //     } else {
    //         answerIsWrong();
    //     }
    //     if(questionIndex < lastQuestionIndex){
    //         count = 0;
    //         questionIndex ++;

    //     }
    // // }


    

}


var questions = [
    {
        questionTitle: "What is the capital of Brazil?",
        a1: "Sao Paolo",
        a2: "Brasilia",
        a3: "Rio de Janeiro",
        a4: "Recife",
        correctAnswer: "a2"
    },
    {
        questionTitle: "Who is the tallest person ever?",
        a1: "Andre the Giant",
        a2: "Don Koehler",
        a3: "Xi Shun",
        a4: "Robert Wadlow",
        correctAnswer: "a4"
    },
    {
        questionTitle: "When was the lightbulb invented?",
        a1: "1879",
        a2: "1844",
        a3: "1867",
        a4: "1858",
        correctAnswer: "a1"
    },
    {
        questionTitle: "How many eyes does a spider have?",
        a1: "Four",
        a2: "Two",
        a3: "Eight",
        a4: "Six",
        correctAnswer: "a1"
    },
    {
        questionTitle: "What building is on the back of the $100 dollar bill?",
        a1: "Independence Hall",
        a2: "United States Capitol",
        a3: "Supreme Court",
        a4: "Lincoln Memorial",
        correctAnswer: "a1"
    },
    {
        questionTitle: "What does LASER stand for?",
        a1: "Light Amplified by Sending Emitted Rays",
        a2: "Light Aggregated Self Emitting Radiowaves",
        a3: "Light Amplified by Stimulated Emission of Rays",
        a4: "Light Amplification by Stimulated Emission of Radiation",
        correctAnswer: "a4"
    },


]

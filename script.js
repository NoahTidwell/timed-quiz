// Quiz questions Array
let quizQuestions = [
    {
    questions: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alets"
    },
    {
    questions: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets"
    },
    {
    questions: "Arrays in Javascript can be used to store ____.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },
    {
    questions: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
    },
    {
    questions: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: ["javascript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
    },

];

// Define Initial Variables
let counter = 0;
let timeHold = 0;
let score = 0;
let questionIndex = 0;
let quizTime = 120;
let acceptingAnswers = false;

// In Page Objects
let timer = document.querySelector("#timer");
let quizOptions = document.querySelector("#question-container");
let quizStart = document.querySelector("#start-quiz");
let nextQuestion = document.querySelector("next-btn");
let mainPage = document.querySelector("#main-page");
let headings = document.querySelector(".container");
let answer1 = document.querySelector("#btn-1");
let answer2 = document.querySelector("#btn-2");
let answer3 = document.querySelector("#btn-3");
let answer4 = document.querySelector("#btn-4");
let questionEl = document.getElementById("question-box");
let answerButtonElement = document.getElementById("answer-buttons");

// Event listener on Start Quiz Button
quizStart.addEventListener("click", function() {

// Clear Page when 'Start Quiz' button is clicked
    mainPage.innerHTML = "";
    headings.innerHTML = "";
    questionIndex = 0;

// Start Timer
var timerBegin = setInterval(function(){ 
    timer.innerHTML = quizTime;
    quizTime--;
    if (quizTime === -1) {
        clearInterval(timerBegin);
        alert("You are out of time!");
    }

}, 1000);

setNextQuestion()

});

var setNextQuestion = function() {
    showQuestions(quizQuestions[questionIndex])
}

var showQuestions = function(quizQuestions) {
    reset();
// Clear Original Quiz Box
    questionEl.innerHTML = quizQuestions.questions;
    quizQuestions.options.forEach(options => {
        const button = document.createElement("button")
        button.innerText = options;
        button.classList.add("btn")
        button.classList.add("btn-primary")
        if (options.correct) {
            button.dataset.correct = options.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.append(button)
    })
   
}

var reset = function () {
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    };
} 
var selectAnswer = function(event) {

}

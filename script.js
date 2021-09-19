// Quiz questions Array
let quizQuestions = [
    {
    question: "Commonly used data types DO NOT include:",
    options: [
        {text: "strings", correct: false},
        {text: "booleans", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false}
    ]
},
{
    question: "The condition in an if / else statement is enclosed within ____.",
    options: [
        {text: "quotes", correct: false},
        {text: "curly brackets", correct: true},
        {text: "parentheses", correct: false},
        {text: "square brackets", correct: false}
    ]
    },
    {
    question: "Arrays in Javascript can be used to store ____.",
    options: [
        {text: "numbers & strings", correct: false},
        {text: "other arrays", correct: false},
        {text: "booleans", correct: false},
        {text: "All of the above", correct: true}
    ]
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    options: [
        {text: "commas", correct: false},
        {text: "curly brackets", correct: false},
        {text: "quotes", correct: true},
        {text: "parentheses", correct: false}
    ]
    },
    {
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: [
        {text: "javascript", correct: false},
        {text: "terminal/bash", correct: false},
        {text: "for loops", correct: false},
        {text: "console log", correct: true}
    ]

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
// Create New buttons and append to the page
    quizQuestions.options.forEach(options => {
        const button = document.createElement("button")
        button.innerText = options;
        button.classList.add("btn")
        button.classList.add("btn-primary")
        if (options.answer) {
            button.dataset.answer = options.answer
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.append(button)
    })
   
}
// Reset Page to prep for the Quiz
var reset = function () {
    quizStart.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    };
} 
var selectAnswer = function(event) {
    var answerChoice = event.target
    console.log(answerChoice)
}

var setStatusClass = function() {
    
    
}

var clearStatusClass = function() {
}
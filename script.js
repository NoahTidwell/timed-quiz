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
let quizOptions = document.querySelector("#qOptions");
let quizStart = document.querySelector("#start-quiz");
let mainPage = document.querySelector("#quizQ");
let headings = document.querySelector(".container");

// Event listener on Start Quiz Button
quizStart.addEventListener("click", function(){

// Clear Page when 'Start Quiz' button is clicked
    mainPage.innerHTML = "";
    headings.innerHTML = "";

// Start Timer
var timerBegin = setInterval(function(){ 
    timer.innerHTML = quizTime;
    quizTime--;
    if (quizTime === -1) {
        clearInterval(timerBegin);
        alert("You are out of time!");
    }

}, 1000);

});

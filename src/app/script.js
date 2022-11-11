// user am taking a code quiz
// 1. click the start button
// 2.  a timer starts and I am presented with a question
// 3.  I answer a question
// 4.  I am presented with another question
// 5.  I answer a question incorrectly
// 6. time is subtracted from the clock
// 7. all questions are answered or the timer reaches 0
// 8. the game is over
// 9. the game is over
// 10. I can save my initials and my score

// TODO
var score = 0
var highScore = 0 // persistent storage
var intials = " " // form

// timer
var timer = document.getElementById('timer');
// start the timer

// function setTimer() {
//     var timeInterval = setInterval(function()
//     timer.textContent = 
// })

function init() {
}

function allDone() {
//     document.createElement("li");
//     highScore.textContent = //
// }
event.preventDefault();


// TODO
// question objects and answers
var questionAnswers = [
    (q1 = {
        q :"Commonly used data types DO NOT INCLUDE: ",
        0 : "1. strings",
        2 : "2. booleans",
        3 : "3. alerts",
        4 : "4. numbers",
        a : "2. booleans",
    },
    q2 = {
        q : "The condition in an if / else statement is enclosed witin ____.",
        0 : "1. quotes",
        1 : "2. curly brackets",
        2 : "3. parentheses",
        3 : "4. square brackets",
        a : "3. parentheses",
    },
    q3 = {
        q : "The condition in an if / else statement is enclosed witin ____.",
        0 : "1. quotes",
        1 : "2. curly brackets",
        2 : "3. parentheses",
        3 : "4. square brackets",
        a : "3. parentheses",
    },
    q4 = {
        q : "Arrays in JavaScript can be used to store ____.",
        0 : "1. numbers and strings",
        1 : "2. other arrays",
        2 : "3. booleans",
        3 : "4. all of the above",
        a : "3. all of the above",
    },
    q4 = {
        q : "String values must be enclosed within ____ when being assigned to variables.",
        0 : "1. commas",
        1 : "2. curly brackets",
        2 : "3. quotes", 
        3 : "4. parentheses",
        a : "3. quotes",
    },
    q5 = {
        q : "A very useful tool used during development and debugginf for printing content to the debudder is:",
        0 : "1. JavaScript",
        1 : "2. terminal / bash",
        2 : "3. for loops", 
        3 : "4. console.log()",
        a : "5. console.log()",
    })]
}

// TODO make the section with the questions and answers on a carosel

var score = 0
var highScore = 0 // persistent storage
var initials = "" // form
// timer
var timerCount= 60;
var timerElement = document.querySelector(".timer");

var startButton = document.querySelector(".start-quiz");

// win + lose
var win = document.querySelector(".win");
var lose = document.querySelector(".lose")
var winCounter = 0;
var loseCounter = 0;
var isWin = false;


var questions = document.getElementById("questions");
console.log(questions)

init();

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  timerCount = 60;
  startTimer()
});

questions.addEventListener("click", function (event) {
  event.preventDefault();
  var a = event.target.value;
  console.log(a)
  if (a != null) {
    validateQ(a);
  }
});
// question objects
var questions = document.querySelector(".questions")

function startTimer() {
    var timeInterval = setInterval(function(){
    timerElement.textContent = timerCount;
    timerCount--;
    // console.log(timerCount)
    if(timerCount === 0) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
    }
  }, 1000);
}

function validateQ() {
  if(questionAnswers === questionAnswers[a]) {
    console.log("you got it right!")
  }else{
    console.log("wrong!")
    // minus 10 secs timerCount 
  }
}

function init() {

}

function startQuiz() {
    // timerCount = 60;
      // Prevents start button from being clicked when round is in progress
    // startButton.disabled = true;
    startTimer()
}


function allDone() {
     document.createElement("li");
     highScore.textContent = highScore
 }


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

//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz());

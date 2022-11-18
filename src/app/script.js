var body = document.body;
var score = 0
var highScore = 0 // persistent storage
var initials = "" // form

// timer
var timerCount= 60;
var timerElement = document.querySelector(".timer");

// start page
var startButton = document.querySelector(".start-quiz");
var welcome = document.querySelector(".welcome");
var welcomeSection = document.querySelector("#welcome-section");

// win + lose
var win = document.querySelector(".win");
var lose = document.querySelector(".lose")
var winCounter = 0;
var loseCounter = 0;
var isWin = false;

// question page
var questions = document.getElementById("questions");
var questionBtn = document.getElementById("question-btn");

// all done page
var allDone = document.getElementById("all-done");

// highscores
var highscore = document.getElementById("highscores");
// console.log(questions)

function init() {

}


// start button actions
startButton.addEventListener("click", function(event) {
  event.preventDefault();
  questions.setAttribute("class", "show" );
  welcome.setAttribute("class", "hidden");
  allDone.setAttribute("class", "hidden");
  highscore.setAttribute("class", "hidden");
  timerCount = 60;
  startTimer()
  startQuiz();
});


// Event listener for Question button page
// questionBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   var a = event.target.value;
//   console.log(a)
//   if (a != null) {
//     validateQ(a);
//   }
// });




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

// nested loop?
function validateQ() {
  if(questionAnswers === questionAnswers[a]) {
    console.log("you got it right!")
    // point total
  }else{
    console.log("wrong!")
    // minus 10 secs timerCount 
  }
}

// create element -have javascript 

function init() {
    renderQ();

}

function startQuiz() {
    // timerCount = 60;
      // Prevents start button from being clicked when round is in progress
    // startButton.disabled = true;
    startTimer()
    // console.log(questionAnswers)
}


function allDone() {
     document.createElement("li");
     highScore.textContent = highScore
 }



// question objects and answers can't mix letters + nums
var questionAnswers = [
   {
        que :"Commonly used data types DO NOT INCLUDE: ",
        a : "1. strings",
        b : "2. booleans",
        c : "3. alerts",
        d : "4. numbers",
        ans : "2. booleans",
    },
   {
        que : "The condition in an if / else statement is enclosed within ____.",
        a : "1. quotes",
        b : "2. curly brackets",
        c : "3. parentheses",
        d : "4. square brackets",
        ans : "3. parentheses",
    },
   {
        que : "Arrays in JavaScript can be used to store ____.",
        a : "1. numbers and strings",
        b : "2. other arrays",
        c : "3. booleans",
        d : "4. all of the above",
        ans : "4. all of the above",
    },
    {
        que : "String values must be enclosed within ____ when being assigned to variables.",
        a : "1. commas",
        b : "2. curly brackets",
        c : "3. quotes", 
        d : "4. parentheses",
        ans : "3. quotes",
    },
    {
        que : "A very useful tool used during development and debugging for printing content to the debugger is:",
        a : "1. JavaScript",
        b : "2. terminal / bash",
        c : "3. for loops", 
        d : "4. console.log()",
        ans : "4. console.log()",
    }]

// Object is questionAnswers
 // key is "q"
 console.log(questionAnswers[0].que)

function renderQ() {
 var qEl = document.createElement("div");
 var listQ = document.createElement("ol");
 var btn1 = document.createElement("button");
 var btn2 = document.createElement("button");
 var btn3 = document.createElement("button");
 var btn4 = document.createElement("button");

 localStorage.setItem("questionAnswers", JSON.stringify(questionAnswers));
 var multiball = JSON.parse(localStorage.getItem("questionsAnswers"));

 listQ.setAttribute("style", "background:#333333; padding:20px;");
 questions.setAttribute("style", "margin:auto; padding:20px;");
// Add styling to list items
 btn1.setAttribute("style", "color:white; background: rgb(85, 14, 193); padding: 5px; border-radius: 12px; margin:auto;");
 btn2.setAttribute("style", "color:white; background: rgb(85, 14, 193); padding: 5px; border-radius: 12px; margin:auto;");
 btn3.setAttribute("style", "color:white; background: rgb(85, 14, 193); padding: 5px; border-radius: 12px; margin:auto;");
 btn4.setAttribute("style", "color:white; background: rgb(85, 14, 193); padding: 5px; border-radius: 12px; margin:auto;");

 questions.textContent = questionAnswers[0].que;
 btn1.textContent = questionAnswers[0].a;
 btn2.textContent = questionAnswers[2].b;
 btn3.textContent = questionAnswers[3].c;
 btn4.textContent = questionAnswers[4].d;
 

 body.appendChild(btn1);
 body.appendChild(btn2);
 body.appendChild(btn3);
 body.appendChild(btn4);
}

init();

// https://www.tutorialstonight.com/javascript-create-element
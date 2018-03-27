$(document).ready(function() { 
    initialScreen();
    var sample = document.getElementById("foobar");
  sample.play();
    // makes a start button object. and a initial screen for player

function initialScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $('.playArea').html(startScreen);  }



// below is function which generates dynamic HTML 

$('body').on('click', '.start-button', function(event){
    event.preventDefault(); 
    generateHTML();
    timerWrapper(); 


}); 
// close of start click function 

$('body').on('click' , '.answer', function(event) {
    selectedAnswer = $(this).text();
    if (selectedAnswer === correctAnswers[questionCounter]) {
        // is correct
        clearInterval(theClock);
        generateWin();
    

    } else { 
        // is incorrect
        clearInterval(theClock);
        generateLoss();  }

   

});
 // close of answer click function.

$("body").on("click", ".reset-button", function(event) {
    resetGame();
    generateHTML();
    initialScreen();
}); 
    // close of reset click function 

});
 // close of JQuery wrapper / handler 


function timeOutLoss() {
    unanswered++;
    thisHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>";
    $(".playArea").html(thisHTML); 
    setTimeout(wait, 2000); }


function generateWin() {
    correct++;
    thisHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
    $(".playArea").html(thisHTML);
    setTimeout(wait, 2000); }



function generateLoss(){
incorrect++;
thisHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";
$(".playArea").html(thisHTML);
setTimeout(wait, 2000); }



function generateHTML() {
    thisHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
    $(".playArea").html(thisHTML); }


function wait() { 
if (questionCounter < 7) {
    questionCounter++;
    generateHTML(); 
    counter = 30;
    timerWrapper(); 

}  else {
     finalScreen(); 

} }

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000); 
    function thirtySeconds() {
        if (counter === 0) {
        clearInterval(theClock); 
        timeOutLoss();

} if (counter > 0) {
    counter--; }


  $(".timer").html(counter);  } }

function finalScreen() {
    thisHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".playArea").html(thisHTML);  }



function resetGame() {
    questionCounter = 0;
    correct = 0; 
    incorrect = 0;
    unanswered = 0;
    counter = 0;
    generateHTML();
    timerWrapper(); }


var initialScreen;
var startScreen;
var thisHTML;
var counter = 30;


// Primary method of question / answer is array sorting with [] indexes etc.

var questionArray = 

["Considered to be the first commercial recording of the music that has come to be recognised as the blues. 'Crazy Blues' was recorded by which songstress?",
 "Big Mama Thornton had a big hit with this song that was also a hit for Elvis Presley. What song had these lyrics in Thornton's version?",
  "Whose real name was Lizzie Douglas; she had a hit with 'Bumble Bee' in 1929?",
  "Which Chicago blues guitarist had a hit with 'Easy Baby' in the late 1950s?", 
  "What song did Santana perform in 1969 at Woodstock?", 
  "Which 1960s hard rock group generated a smash hit with a song based on the fantasy “Alice in Wonderland?”",
  "Which of these songs was NOT banned from radio play in the 1960s?",
  "Brothers Ray and Dave Davies formed this band in 1964:"];

var answerArray = 

                    [["Mamie Smith", "Big Momma Thorton" , "Etta James", "Billie Holiday"], 
                     ["Chain of Fools","Hound Dog","Heartbreak Hotel","At last"],
                     ["Ma Rainey", "Koko Taylor", "Memphis Minnie", "Marcia Ball"],
                     ["Louisiana Red","Otis Redding","Magic Sam","Elvis"], 
                     ["Black Magic Woman", "Smoke on the Water", "Purple Haze", "Soul Sacrifice"], 
                     ["Jefferson Airplane","Deep Purple","Grateful Dead","T-REX"],
                     ["Last Kiss", "Little Red Riding Hood", "Let's spend the night Together", "A Day in the Life"],
                     ["The Doors","Yes","The Who","The Kinks"]];


var correctAnswers = ["A. Mamie Smith",
                      "B. Hound Dog",
                      "C. Memphis Minnie",
                      "C. Magic Sam", 
                      "D. Soul Sacrifice",
                      "A. Jefferson Airplane",
                      "B. Little Red Riding Hood", 
                      "D. The Kinks"];

var questionCounter = 0;
var theClock = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;



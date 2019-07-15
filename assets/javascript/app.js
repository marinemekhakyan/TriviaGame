$(document).ready(function(){

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var seconds = 120;
    var intervalId;
    var unanswered = 8;
    
        $("#questions-box").hide();
        $("#finalScore").hide();
    
        $("#start").click(function () {
            $(this).hide();
            $("#intro").hide();
            $("#questions-box").show();
    
            function run() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
            }
    
            function decrement() {
                seconds --;
    
                if (seconds === 0) {
                    stop();
                }

                function stop() {
                    clearInterval(intervalId);
                }
    
                if (seconds < 10) {
                    $("#seconds").text("0" + seconds)
                } else {
                    $("#seconds").text(seconds);
                }
            }
            run()
        });
    
        $("#endGame").hide();
    
        function finalScore(userAnswer, answer) {
            if (!userAnswer) return;
            if (userAnswer === answer) {
                correctAnswers++;
                unanswered--;
    
            } else {
                incorrectAnswers++;
                unanswered--;
    
            }
        }
    
        $("#doneButton").click(function () {
            var answer1 = $('input[type="radio"][name="tarantino"]:checked').val();
            var answer2 = $('input[type="radio"][name="anderson"]:checked').val();
            var answer3 = $('input[type="radio"][name="chaplin"]:checked').val();
            var answer4 = $('input[type="radio"][name="hitchcock"]:checked').val();
            var answer5 = $('input[type="radio"][name="panther"]:checked').val();
            var answer6 = $('input[type="radio"][name="gump"]:checked').val();
            var answer7 = $('input[type="radio"][name="musical"]:checked').val();
            var answer8 = $('input[type="radio"][name="director"]:checked').val();

    
            score(parseInt(answer1), 4);
            score(parseInt(answer2), 3);
            score(parseInt(answer3), 2);
            score(parseInt(answer4), 3);
            score(parseInt(answer5), 2);
            score(parseInt(answer6), 2);
            score(parseInt(answer7), 4);
            score(parseInt(answer8), 1);


            stop();
    
        });
    
        function hideShowScoreboard() {
            $("#questions-box").hide();
            $("#doneButton").hide();
            $("#finalScore").show();
        }
    
        function stop() {
            clearInterval(intervalId)
            scoreBoard();
            hideShowScoreboard();
        }
    
        var scoreBoard = function () {
            $("#correctAnswers").text("Correct Answers: " + correctAnswers)
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers)
            $("#unanswered").text("Unanswered: " + unanswered);
        }
    
    
    
    });













//     // start the game when user clicks on Start button
//     $("#start-button").on("click", gameState.startTimer);
  
//   });
  
//   // information about the state of game play
//   var gameState = {
  
//     // set the time at 60 seconds, and count down by 1 second
//     timeRemaining : 3,
  
//     // start the timer, hide the start page, show the questions
//     startTimer: function() {
//       $("#timer").text("Time remaining: " + gameState.timeRemaining);
//       setInterval(gameState.countdown, 1000);
//       $("#start-page").hide();
//       trivia.displayQuestions();
//     },
  
//     // decrement the timer and update the UI; stop the timer at 0
//     countdown: function() {
//       gameState.timeRemaining--;
//       $("#timer").text("Time remaining: " + gameState.timeRemaining);
//       if (gameState.timeRemaining === 0) {
//         gameState.stopTimer();
//         $("#timer").empty();
//       }
//     },
  
//     // stop the timer and check the answers
//     stopTimer: function() {
//       clearInterval();
//       trivia.checkAnswers();
//     },
  
//     // hide the quetions and display the end page with results
//     showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
//       $("#end-page").show();
//       $("#questions-box").empty();
//       $("#timer").empty();
//       $("#timer").hide();
//       $("#correct-answers").text("Correct answers (Woo-hoo!): " + numCorrect);
//       $("#incorrect-answers").text("Incorrect answers (D'oh!): " + numIncorrect);
//       $("#unanswered").text("Skipped questions (Meh): " + numUnanswered);
//     }
//   }
  
//   // functions to handle the building questions page and scoring
//   var trivia = {
  
//     // pull questions from the array of questions, loop through them, and append to UI
//     displayQuestions: function() {
//       var divContainer = $("#questions-box");
//       var answerGroup = $(".form-check");
//       divContainer.append('<h2>Answer the following questions:</h2>');
              
//       for (var i = 0; i < questionBank.length; i++) {
  
//         divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
//         var answer1 = questionBank[i].answers[0];
//         var answer2 = questionBank[i].answers[1];
//         var answer3 = questionBank[i].answers[2];
//         var answer4 = questionBank[i].answers[3];

//         divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
//         divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
//         divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
//         divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');

//     }
  
//     var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
//     divContainer.append(doneButton);
//     $("#done-button").on("click", gameState.stopTimer);
//   },

//   checkAnswers: function() {
//     var correctAnswer;
//     var userAnswer;
//     var numCorrect = 0;
//     var numIncorrect = 0;
//     var numUnanswered = 0;

//     // loop through to compare the text of the label with the user answers
//     // increment score counts appropriately
//     for (var i = 0; i < questionBank.length; i++) {
//       correctAnswer = questionBank[i].correct;
//       userAnswer = $('input[id=radio'+i+']:checked + label').text();

//       if (userAnswer === correctAnswer) {
//         numCorrect++;
//       } else if (userAnswer === "") {
//         numUnanswered++;
//       } else if (userAnswer !== correctAnswer) {
//         {
//           numIncorrect++;
//         }
//       }
//     }

//     // show the end page with the score tally
//     gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
//   },
// }

// var allQuestions = 
// [
//     { 
//         question: "1) Which of these is NOT a Tarantino movie?",
//         answers: ["Django Unchained", "Inglorious Bastards", "From Dusk Till Dawn", "The Royal Tenenbaums"],
//         correct: "The Royal Tenenbaums"

//     },

//     { 
//         question: "2) What best describes the style of Wes Anderson?",
//         answers: ["Dark mystery", "Bloody joy", "Aesthetic perfection", "Rainbows and unicorns"],
//         correct: "Aesthetic perfection"

//     },

//     { 
//         question: "3) Which part of his body did Charlie Chaplin insure?",
//         answers: ["Hands", "Feet", "Legs", "Eyes"],
//         correct: "Feet"

//     },

//     { 
//         question: "4) In Hitchcock's film 'The trouble with Harry' what was the trouble?",
//         answers: ["He was upset", "He killed his wife", "He was dead", "He had one eye"],
//         correct: "He was dead"

//     },

//     { 
//         question: "5) In the original film, who steals the Pink Panther?",
//         answers: ["The bad bad thief", "The Phantom", "Inspector Clouseau", "Sir Charles Litton"],
//         correct: "The Phantom"

//     },

//     { 
//         question: "6) Which movie is this quote from 'When I got tired, I slept. When I got hungry, I ate. When I had to go, you know, I went.'?",
//         answers: ["The Green Mile", "Forrest Gump", "Catch Me If You Can", "Saving Private Ryan"],
//         correct: "Forrest Gump"

//     },

//     { 
//         question: "7) Which of these is NOT a musical?",
//         answers: ["Les Miserables", "Chicago", "Hamilton", "Bohemian Rhapsody"],
//         correct: "Bohemian Rhapsody"

//     },

//     { 
//         question: "8) Which of these movie directors won the most Oscars throughout the history?",
//         answers: ["John Ford", "William Wyler", "Francis Ford Coppola", "Martin Scorcese"],
//         correct: "John Ford"

//     }
// ]
//     //event listeners
//     $("#rem-time").hide();
//     $("#start").on('click', trivia.startGame);
//     $(document).on('click' , '.option', trivia.guessChecker);
    
// var trivias = [
//     {
//         question: "question 1",
//         answers: ['1', '2', '3'],
//         correctAnswer: "2" //this is fine


//         data-answer = '2'

//         //when clicked on answer you get 
//         //data-answer compare to 
//         currentTrivia.correct.answer
//     }
// ]

// var currentQuestionIndex = 0;
// var currentTrivia = trivias[currentQuestionIndex];

// currentTrivia.question.answers.correctAnser

// function (pickQuestion() {
//     currentQuestionIndex ++;
//     currentTrivia = trivias[currentQuestionIndex];
    
//     renderQ()

//     function renderQ() {

//     }
// })


// })

// //to target the correct answer in an array "" are ok

// $(document).ready(function() {

//     $("#start-button").on("click", gameStatus.startTimer);
// });

// var gameStatus = {

//     remainingTime : 3,

//     startTimer: function () {

//         $("#timer").text("Time Remaining: " + gameStatus.remainingTime);
//         setInterval(gameStatus.countdown, 1000);
        
//         $("#start-page").hide();
//         trivia.displayQuestions();
//     },

//     countdown: function() {
//         gameStatus.remainingTime --;
//         $("#timer").text("Time Remaining: " + gameStatus.remainingTime);
//         if (gameStatus.remainingTime === 0) {
//             gameStatus.stopTimer();
//             alert("Time's Up");
//             $("#timer").empty();
//         }
//     },

//     stopTimer: function() {
//         clearInterval();
//         trivia.checkAnswers();
//     },

//     displayResults: function(correctA, incorrectA, unansweredQ) {
//         $("#end-game").show();
//         $("#questions").empty();
//         $("#timer").empty();
//         $("#timer").hide();
//         $("#correct-answers").text("Correct answers: " + correctA);
//         $("#incorrect-answers").text("Incorrect answers: " + incorrectA);
//         $("#unanswered").text("Unanswered: " + unansweredQ);
//     }
// }

// var trivia = {
//     displayQuestions: function() {
//         var qContainer = $("#questions");
//         var aAnswers = $(".form-check");
//         qContainer.append("<h2>It's your time to shine!</h2>");

//         for (var i =0; i < allQuestions.length; i ++) {

//             qContainer.append('<div id="question">' + allQuestions[i].question + '</div>');

//             var answer1 = allQuestions[i].answers[0];
//             var answer2 = allQuestions[i].answers[1];
//             var answer3 = allQuestions[i].answers[2];
//             var answer4 = allQuestions[i].answers[3];

            // qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
            // qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
            // qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
            // qContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');


            // qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option1'+i+'"><label class="form-check-label" for="inlineCheckbox1'+i+'">' + answer1 + ' </label></div>');
            // qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option2'+i+'"><label class="form-check-label" for="inlineCheckbox2'+i+'">' + answer2 + ' </label></div>');
            // qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option3'+i+'"><label class="form-check-label" for="inlineCheckbox3'+i+'">' + answer3 + ' </label></div>');
            // qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option4'+i+'"><label class="form-check-label" for="inlineCheckbox4'+i+'">' + answer4 + ' </label></div>');

    //     }

    //     var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">DONE</button>';
    //     qContainer.append(doneButton);
    //     $("#done-button").on("click", gameStatus.stopTimer);
    // },

    // checkAnswers: function() {
    //     var correctAnswer;
    //     var chosenAnswer;   
    //     var correctA = 0;
    //     var incorrectA = 0;
    //     var unansweredQ = 0;

    //     for (var i = 0; i < allQuestions.length; i ++) {
    //         correctAnswer = allQuestions[i].correct;
    //         chosenAnswer = $('input[id = inlineCheckbox '+i+']:checked + label').text();

    //         if (chosenAnswer === correctAnswer) {
    //             correctA++;
    //         } else if (chosenAnswer !== correctAnswer) {
    //             {
    //                 incorrectA++;
    //             }
    //         }
    //     }

    //     gameStatus.displayResults(correctA, incorrectA, unansweredQ);
    // }
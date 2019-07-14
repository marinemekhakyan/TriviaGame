$(document).ready(function() {

    $("#start-button").on("click", gameState.startTimer);
});

var gameStatus = {

    remainingTime : 80,

    startTimer: function () {
        $("#timer").text("Time Remaining: " + gameStatus.remainingTime);
        setInterval(gameStatus.countdown, 1000);
        $("#start-page").hide();
        trivia.displayQuestions();
    },

    countdown: function() {
        gameStatus.remainingTime --;
        $("#timer").text("Time Remaining: " + gameStatus.remainingTime);
        if (gameStatus.remainingTime === 0) {
            gameStatus.stopTimer();
            $("#timer").empty();
        }
    },

    stopTimer: function() {
        clearInterval();
        trivia.checkAnswers();
    },

    displayResults: function(correctA, incorrectA, unansweredQ) {
        $("#end-game").show();
        $("#questions").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct-answers").text("Correct answers: " + correctA);
        $("#incorrect-answers").text("Incorrect answers: " + incorrectA);
        $("#unanswered").text("Unanswered: " + unansweredQ);
    }
}

var trivia = {
    displayQuestions: function() {
        var qContainer = $("#questions");
        var aAnswers = $(".form-check form-check-inline");
        qContainer.append("<h2>It's your time to shine!</h2>");

        for (var i =0; i < allQuestions.length; i ++) {

            qContainer.append('<div id="question">' + allQuestions[i].question + '</div>');

            var answer1 = allQuestions[i].answers[0];
            var answer2 = allQuestions[i].answers[1];
            var answer3 = allQuestions[i].answers[2];
            var answer4 = allQuestions[i].answers[3];

            qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option1'+i+'"><label class="form-check-label" for="inlineCheckbox1'+i+'">' + answer1 + ' </label></div>');
            qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option2'+i+'"><label class="form-check-label" for="inlineCheckbox2'+i+'">' + answer2 + ' </label></div>');
            qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option3'+i+'"><label class="form-check-label" for="inlineCheckbox3'+i+'">' + answer3 + ' </label></div>');
            qContainer.append('<div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" value="option4'+i+'"><label class="form-check-label" for="inlineCheckbox4'+i+'">' + answer4 + ' </label></div>');

        }

        var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">DONE</button>';
        qContainer.append(doneButton);
        $("#done-button").on("click", gameStatus.stopTimer);
    },

    checkAnswers: function() {
        var correctAnswer;
        var chosenAnswer;   
        var correctA = 0;
        var incorrectA = 0;
        var unansweredQ = 0;

        for (var i = 0; i < allQuestions.length; i ++) {
            correctAnswer = allQuestions[i].correct;
            chosenAnswer = $('input[id = inlineCheckbox '+i+']:checked + label').text();

            if (chosenAnswer === correctAnswer) {
                correctA++;
            } else if (chosenAnswer !== correctAnswer) {
                {
                    incorrectA++;
                }
            }
        }

        gameStatus.displayResults(correctA, incorrectA, unansweredQ);
    },
}
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


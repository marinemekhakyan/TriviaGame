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
    
        $("#finalScore").hide();
    
        function countScore(userAnswer, answer) {
            if (!userAnswer) return;
            if (userAnswer === answer) {
                correctAnswers++;
                unanswered--;
    
            } else {
                incorrectAnswers++;
                unanswered--;
    
            }
        }

        countScore();
    
        $("#doneButton").click(function () {
            var answerOne = $('input[type="radio"][name="tarantino"]:checked').val();
            var answerTwo = $('input[type="radio"][name="anderson"]:checked').val();
            var answerThree = $('input[type="radio"][name="chaplin"]:checked').val();
            var answerFour = $('input[type="radio"][name="hitchcock"]:checked').val();
            var answerFive = $('input[type="radio"][name="panther"]:checked').val();
            var answerSix = $('input[type="radio"][name="gump"]:checked').val();
            var answerSeven = $('input[type="radio"][name="musical"]:checked').val();
            var answerEight = $('input[type="radio"][name="director"]:checked').val();

    
            score(parseInt(answerOne), 4);
            score(parseInt(answerTwo), 3);
            score(parseInt(answerThree), 2);
            score(parseInt(answerFour), 3);
            score(parseInt(answerFive), 2);
            score(parseInt(answerSix), 2);
            score(parseInt(answerSeven), 4);
            score(parseInt(answerEight), 1);


            stop();
    
        });
    
        function showResults() {
            $("#questions-box").hide();
            $("#doneButton").hide();
            $("#finalScore").show();
        }
    
        function stop() {
            clearInterval(intervalId);
        
            scoreTableau();
            showResults();
        }
    
        var scoreTableau = function () {
            $("#correctAnswers").text("Correct Answers: " + correctAnswers)
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers)
            $("#unanswered").text("Unanswered: " + unanswered);
        }
    
    
    
    });

$(document).ready(function() {



//create variables for computer random number, and random numbers for each crystal.
    var goal = Math.floor(19 + Math.random() * 101);
    var gemNumber = Math.floor(1 + Math.random() * 11);
    var wins = 0;
    var losses = 0;

    function score() {
        return gemNumber;
    }
    

//create variables to grab the html elements from the page.
    var randomNumberText = $("#random-number-text");
    var winsText = $("#wins-text");
    var lossesText = $("#losses-text");
    var userScoreText = $("#user-score-text");
    var res = 0;

    $(randomNumberText).text(goal);

    $(".gem-img").on("click", function() {
        res += score()
        if(res > goal) {
            losses ++
            $(lossesText).text(losses);
            goal = Math.floor(19 + Math.random() * 101);
            $(randomNumberText).text(goal);
            res = 0;
        } else if(res == goal) {
            wins ++;
            $(winsText).text(wins);
            goal = Math.floor(19 + Math.random() * 101);
            $(randomNumberText).text(goal);

            res = 0;  
        }
        $(userScoreText).text(res.toString());
        
    });
    

});
// Document ready function so our jquery will not activate until page is loaded
$(document).ready(function(){
    startGame()

    // variable to hold our future random number
    var targetScore;
    
    // variables to hold the value of our wins losses and total score
    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    // link them with our html page
    $(".yourScore").text(yourScore);
    $(".wins").text(wins);
    $(".losses").text(losses);

    // will make 4 crystals
    var red;
    var diamond;
    var purple;
    var yellow;

    // starting the game
     function startGame() {
        // generating random number for our fucntion for our crystals
        red = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        purple = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        // same here for target score
        targetScore = Math.floor(Math.random()* 102) + 19;
        // displaying new number each time game restarts
        $(".targetScore").text(targetScore);
        // resetting users score back to 0.
        yourScore = 0;
        // displaying new number each time game restarts
        $(".yourScore").text(yourScore);
    }

    // game goes on
    // if user clicks on red button, he fires up the function
    $(".red").on('click', function(){
        //Users score equals scre plus value of dimond.
        yourScore = yourScore + red;
        // adding hidden value to the users score.
        $(".yourScore").text(yourScore);
        // fireing up the function count, that tells us if the user wins or looses 
        // and then depends on score we fiering up the fincton victory(if wins) or lost(if lost)
        // we have created that many functions in order to keep our code dry.
        scoreCount()
    })

    $(".diamond").on('click', function(){
        yourScore = yourScore + diamond;
        $(".yourScore").text(yourScore);
        scoreCount()
    })

    $(".purple").on('click', function(){
        yourScore = yourScore + purple;
        $(".yourScore").text(yourScore);
        scoreCount()
    })

    $(".yellow").on('click', function(){
        yourScore = yourScore + yellow;
        $(".yourScore").text(yourScore);
        scoreCount()
    })

    
        
    function scoreCount(){
        if (yourScore === targetScore){
            victory()
        } else if (yourScore > targetScore){
            lost()
        }  
    }

    function lost(){
        alert("Sorry, you lost!");
        losses++
        $(".losses").text(losses);
        startGame()
    }

    function victory(){
        alert("You won!!");
        wins++
        $(".wins").text(wins);
        startGame()

    }

});

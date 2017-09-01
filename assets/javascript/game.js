// Array of generated answers for hangman
var words = ["Diplo", "MuraMasa", "Chainsmokers", "Madeon", "PorterRobinson"];

// Define variables (Wins + Current Word + Number of Guesses Remaining + Letters Already Guessed)
var wins = 0;
var guesses = 11;
var userGuessedLetters = [];
var userCorrectLetters = [];

// Function that lets computer choose from available choices
var computerGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log("Answer: ", computerGuess);
// Splitting the word into characters
var splitWord = computerGuess.split("");


// Generate the correct number of blank spaces
var blankLetters = [];
var myCorrectLetters = document.getElementById("blankSpaces");
for (var i = 0; i < computerGuess.length; i++) {
    blankLetters.push("_");
};
// Write number of blank spaces on DOM
myCorrectLetters.innerHTML = (blankLetters.join(" "));


// User presses key and game starts. Use of an Event listener that logs a user input.
// Option 1:
// document.onkeyup = functions(event) {
// Option 2:
document.addEventListener("keyup", function(event) {
    // User chooses the letter
    var userGuess = event.key.toLowerCase();
    // Pushes each letter guess by user into an array
    userGuessedLetters.push(userGuess);
    // ~~~~Test-Console~~~~~
    console.log("userGuess Array", userGuessedLetters);
    // Push letters into visible array
    var myGuessedLetters = document.getElementById("guessedLetters");
    // Generate visible html list of letters guessed by use on DOM
    myGuessedLetters.innerHTML = ("Letters Already Guessed: " + userGuessedLetters.join(", "));

    // indexing of an array
    // httsps://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/

    // If any of the array items in splitWord is in an index position of userGuess
    if (splitWord.indexOf(userGuess) >= 0) {
        console.log("CORRECT");
        //When a user presses a key, it will push inputs into the userCorrectLetters Arrary
        userCorrectLetters.push(userGuess);
        console.log("userGuess", userGuess)
        console.log("userCorrectLetters", userCorrectLetters)
    } else {
        guesses--;
        var myGuessesLeft = document.getElementById("guessesLeft");
        myGuessesLeft.innerHTML = ("Number of Guesses Remaining: " + guesses);
    }


    // Looping through the userCorrectLetters (correct guesses)
    for (var i = 0; i < splitWord.length; i++) {
        // If splitWord item is indexed on userCorrectLetters Array
        if (userCorrectLetters.indexOf(splitWord[i]) != -1) {
            blankLetters.splice(i, 1, splitWord[i]);
            //Selects for HTML id blankspaces and insterts correct blank spaces array
            var myBlankSpaces = document.getElementById("blankSpaces");
            myBlankSpaces.innerHTML = blankLetters.join(" ");
        };
    };

    // If user WINS: alert, reset, win counter.
    var winner = blankLetters.length == splitWord.length && blankLetters.every(function(element, index) {
        return element === splitWord[index];
    });

    if (winner == true) {
        // Alert popup when correctly guessed
        alert("You guessed the correct word: " + computerGuess + "!")
        // Reset
        wins++;
        guesses = 11;
        userGuessedLetters = [];
        userCorrectLetters = [];
        computerGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
        console.log("NewAnswer: ", computerGuess);
        splitWord = computerGuess.split("");
        blankLetters = [];
        myCorrectLetters = document.getElementById("blankSpaces");
        for (var i = 0; i < computerGuess.length; i++) {
            blankLetters.push("_");
        };
        myCorrectLetters.innerHTML = (blankLetters.join(" "));
        myGuessesLeft.innerHTML = ("Number of Guesses Remaining: " + guesses);
        myGuessedLetters.innerHTML = ("Letters Already Guessed: " + userGuessedLetters.join(", "));
        // Displaying win counter
        var myWins = document.getElementById("wins");
        myWins.innerHTML = ("Wins: " + wins)
    }

    // If user LOSES: alert, reset, try again.
    if (guesses <= 0) {
        alert("You lose! Try again.")
        wins = 0;
        guesses = 11;
        userGuessedLetters = [];
        userCorrectLetters = [];
        blankLetters = [];
        myCorrectLetters = document.getElementById("blankSpaces");
        for (var i = 0; i < computerGuess.length; i++) {
            blankLetters.push("_");
        };
        myCorrectLetters.innerHTML = (blankLetters.join(" "));
        myGuessesLeft.innerHTML = ("Number of Guesses Remaining: " + guesses);
        myGuessedLetters.innerHTML = ("Letters Already Guessed: " + userGuessedLetters.join(", "));
    }

    console.log("blankLetters", blankLetters);





    // User presses key game starts



    // User choose for 12 guesses



    // Counter that displays guesses, wins, and letters already guessed



    // Reset game once user wins or lose



});
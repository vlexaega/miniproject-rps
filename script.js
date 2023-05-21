// RPS Storage Array
var options = ['R','P','S','r','p','s']

// User input & Comp input vars
var userRes;
var compChoice;

// empty checking vars
var checkVar; // to check if user input is a valid input or not
var checkStat; // to check which stat to increase, I used booleans such as true, false, or null

// Placeholder 0 stat vars
var winStat = 0;
var lossStat = 0;
var tieStat = 0;

// Checks if input is 'R' 'P' or 'S' , this is not case sensitive which is why my array has lower and upper
function isValid() {
    // for loop will check all elements of the array and the const var is to make the items a string
    for (var i = 0; i < options.length; i++) {
        const found = options[i];
        // only if an element was found then it will return true
        if (userRes === found) {
            return checkVar = true;
        }
    }
    // all else if not found it will return false
    checkVar = false;
}

// will get us a random input for the comp using strings in the options array
function getCompChoice() {
    let compSet = options[Math.floor(Math.random() * options.length)];
    compChoice = compSet.toUpperCase();
    // breaks and returns an alert letting the user know which choice the comp selected
    return alert('The computer chose ' + compChoice);
}

// the main game pretty much is in this function
function getUserChoice () {
    // i use userSet to store input from the prompt
    userSet = prompt('Rock Paper or Scissors?');
    // if conditioning checks if user clicked cancel which will break this function and return startgame to start the game again
    if (userSet === null) {
        return startGame();
    } else {
        // if user did not click cancel then our input from userSet is assigned to userRes and made uppercase
        userRes = userSet.toUpperCase();
    }
    // runs validity function
    isValid();
    // if checkvar was output as true then the game continues
    if (checkVar === true) {
        getCompChoice();
        // if statement for all possible wins which alerts user they won and makes our checkStat set to true then runs playagain function
        if((userRes === 'R' && compChoice === 'S') ||
        (userRes === 'P' && compChoice === 'R' ||
        (userRes === 'S' && compChoice === 'P'))) {
            alert('You Won !');
            checkStat = true;
            playAgain();
            // if user and comp tied checkStat is set to null then runs playagain func
        } else if (userRes === compChoice) {
            alert('You Tied !');
            checkStat = null;
            playAgain();
            // if user input does not match comp input then checkStat set to false then runs playagain func
        } else if (userRes !== compChoice) {
            alert('You Lost !');
            checkStat = false;
            playAgain();
        }
        // else if the user input does not match 'R' 'P' or 'S' then they will be prompted again to input
    } else if (checkVar === false) {
        alert('Please enter R, P, or S. (Not case sensitive).');
        getUserChoice();
    }
}

// play again function
function playAgain() {
    // this will just check the checkStat var then add score based on if checkStat was true, false, or null || true = win +1 | false = loss +1 | null = tie +1
    if (checkStat) {
        winStat++;
        alert('Your Stats:\nWins: ' + winStat + '\nLosses: ' + lossStat + '\nTies: ' + tieStat);
    } else if (!checkStat){
        lossStat++;
        alert('Your Stats:\nWins: ' + winStat + '\nLosses: ' + lossStat + '\nTies: ' + tieStat);
    } else if (checkStat === null) {
        tieStat++;
        alert('Your Stats:\nWins: ' + winStat + '\nLosses: ' + lossStat + '\nTies: ' + tieStat);
    }
    // After adding score it will ask if you wanna play again
    pAgain = confirm('Play Again ?')
    // if the user selected yes then it will restart the game from getUserChoice function
    if (pAgain) {
        getUserChoice();
    }
}

... (14 lines left)
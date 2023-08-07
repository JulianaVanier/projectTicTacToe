// get event click
table.addEventListener("click", (event) => {
    // let saveId = document.querySelector("td");
    insertValue(event);
});
//*********************************************************************/

// get event click for next round
newRound.addEventListener("click", (event) => {
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    document.getElementById("winner").classList.remove("message");
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("winner").innerHTML = "";
    saveClicks = []; // clear clicks inside for next round
});
//*********************************************************************/

let audioX = new Audio("/web-programming/projectTicTacToe/sound/sound_player_x.wav");
let audioO = new Audio("/web-programming/projectTicTacToe/sound/sound_player_o.wav");
let audioWinner = new Audio("/web-programming/projectTicTacToe/sound/sound_winner.wav");
let audioTies = new Audio("/web-programming/projectTicTacToe/sound/sound_ties.wav");
let print = "X"; // created to determine next user
let cell = document.querySelectorAll(".cell");
let saveClicks = []; // create to count clicks and check ties
let pointsTies = 1; 
let pointsX = 1;
let pointsO = 1;

// function to insert value in the cell and user inside let print
function insertValue(event) {
    let selectedtCell = event.target;

    if (selectedtCell.innerHTML) return;

    saveClicks.push(selectedtCell.id);


    if (print === "X") {
    selectedtCell.innerHTML = print;
        audioX.play();
        endGame(print);
        print = "O";

    } else {
    selectedtCell.innerHTML = print;
        audioO.play();
        endGame(print);
        print = "X";
    }
    
    playerTurn();
}
//*********************************************************************/

//condition to show who plays
function playerTurn() {

    if (name_playerX.classList.contains("who_playX")) {
        name_playerX.classList.remove("who_playX");
        name_playerO.classList.add("who_playO");
        turn_player.innerHTML = "O";
    } else {
        name_playerO.classList.remove("who_playO");
        name_playerX.classList.add("who_playX");
        turn_player.innerHTML = "X";
    }
}
//*********************************************************************/

//function say who wins or say ties
function endGame(print) {

    if (checkWinner(print) === true) {
        audioWinner.play();
        winner.textContent = `Player ${print} Wins!`;
        winner.classList.add("message");
        document.getElementById("playAgain").style.display = "block";
        addPointsWinner(print); //cal function to add score for the winner
        return; //if there is winner, return and will not check ties
    } 

    if (saveClicks.length >= 9) {
        audioTies.play();
        winner.textContent = `Ties`;
        score_ties.innerHTML = pointsTies;
        winner.classList.add("message");
        document.getElementById("playAgain").style.display = "block";
        pointsTies++;
    }
}
//*********************************************************************/

//function to check if the current player won or not, returns true or false
function checkWinner(print) {
    let allWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [0, 4, 8],
        [2, 5, 8],
    ];

    for (let i = 0; i < allWin.length; i++) {
        if (
            cell[allWin[i][0]].textContent === print &&
            cell[allWin[i][1]].textContent === print &&
            cell[allWin[i][2]].textContent === print
        ) {
            return true;
        }
    }
    return false;
}
//*********************************************************************/

//funciton to add score to winner
function addPointsWinner(print) {

    if (print === "X") {
        score_playerX.innerHTML = pointsX;
        pointsX++;
    } else {
        score_playerO.innerHTML = pointsO;
        pointsO++;
    }
}
//*********************************************************************/
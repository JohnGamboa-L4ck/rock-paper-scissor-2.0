let roundCounter = 1;
const addRound = () => { roundCounter++; };

//create a variable with an array of weapons for computers choices
const weaponChoices = ['cPlayRock', 'cPlayPaper', 'cPlayScissor'];
//create a function that will return a random weapon from the array
const computerPlay = () => weaponChoices[Math.floor(Math.random() * 3)];
//show the computer selected weapon in html
const showComputerSeletedWeapon = function(computerSelected){
    computerWeaponElement = document.querySelector(`#${computerSelected}`);
    computerWeaponElement.classList.add('selected');
    computerWeaponArenaElement = document.querySelector(`#${computerSelected}2`);
    computerWeaponArenaElement.classList.remove('hidden');
};

//show the player selected weapon in html
const showPlayerSelectedWeapon = function(playerSelected){
    playerWeaponElement = document.querySelector(`#${playerSelected}`);
    playerWeaponElement.classList.add('selected');
    playerWeaponArenaElement = document.querySelector(`#${playerSelected}2`);
    playerWeaponArenaElement.classList.remove('hidden');
};

//show the word "VS." in html
const showVersus = function(){ 
    document.querySelector('#versus').classList.remove('hidden');
};

//return who is the winner
const getRoundResult = function(playerSelection, computerSelection){ 
    let roundWinner = null;

    if(playerSelection == 'playRock' && computerSelection == 'cPlayRock'){
        roundWinner = "It's a tie!";
    }
    if(playerSelection == 'playRock' && computerSelection == 'cPlayPaper'){
        roundWinner = 'You lose this round.';
    }
    if(playerSelection == 'playRock' && computerSelection == 'cPlayScissor'){
        roundWinner = 'You win this round!';
    }
    if(playerSelection == 'playPaper' && computerSelection == 'cPlayPaper'){
        roundWinner = "It's a tie!";
    }
    if(playerSelection == 'playPaper' && computerSelection == 'cPlayScissor'){
        roundWinner = 'You lose this round.';
    }
    if(playerSelection == 'playPaper' && computerSelection == 'cPlayRock'){
        roundWinner = 'You win this round!';
    }
    if(playerSelection == 'playScissor' && computerSelection == 'cPlayScissor'){
        roundWinner = "It's a tie!";
    }
    if(playerSelection == 'playScissor' && computerSelection == 'cPlayRock'){
        roundWinner = "You lose this round.";
    }
    if(playerSelection == 'playScissor' && computerSelection == 'cPlayPaper'){
        roundWinner = 'You win this round!';
    }
    return roundWinner;  
}

//hide the weapons and the word vs.
const hideWeaponAndVs = function(computerSelected, playerSelected){
    computerWeaponElement = document.querySelector(`#${computerSelected}`);
    computerWeaponElement.classList.remove('selected');
    computerWeaponArenaElement = document.querySelector(`#${computerSelected}2`);
    computerWeaponArenaElement.classList.add('hidden');

    playerWeaponElement = document.querySelector(`#${playerSelected}`);
    playerWeaponElement.classList.remove('selected');
    playerWeaponArenaElement = document.querySelector(`#${playerSelected}2`);
    playerWeaponArenaElement.classList.add('hidden');

    document.querySelector('#versus').classList.add('hidden');
}

//show the round winner in the html
roundWinnerElement = document.querySelector('#round-winner');
const showRoundWinner = function(){
    roundWinnerElement.classList.remove('hidden');
    roundWinnerElement.innerHTML = roundResult;
};

//create variable that will keep the player's score
let playerScoreCounter = 0;
//create variable that will keep the computer's score
let computerScoreCounter = 0;
//create a function that will add score defending on the round outcome
const playerScoreElement = document.querySelector('#playerScore');
const computerScoreElement = document.querySelector('#computerScore');
const addScore = function(roundResult){
    if(roundResult == 'You win this round!'){
        playerScoreCounter++;
    }
    if(roundResult == 'You lose this round.'){
        computerScoreCounter++;
    }
    if(roundResult == "It's a tie!"){
        playerScoreCounter += 0;
        computerScoreCounter += 0;
    }

    playerScoreElement.innerHTML = playerScoreCounter; 
    computerScoreElement.innerHTML = computerScoreCounter;
};

const checkScore = function(){
    if((playerScoreCounter < 5) && (computerScoreCounter < 5)){
        addRound();
    } else {
        fixWeapons();
        endGame();
    }
};

const hideRoundWinner = function(){
    roundWinnerElement.innerHTML = null;
    roundWinnerElement.classList.add('hidden');
};

const weapons = document.querySelectorAll('.weapon');
//create a function that will disable all player inputs
const disableWeapons = function(){
    weapons.forEach(function(weapon){
        weapon.style.pointerEvents = 'none';
        weapon.style.color = 'var(--lightest-blue)';
    });
};

//create a function that will return the player's real weapon name
const getPlayerRealWeaponName = function (playerPlayed){
    let realWeapon;
     if(playerPlayed == 'playRock'){
        realWeapon = 'rock';
     }
     if(playerPlayed == 'playPaper'){
        realWeapon = 'paper';
     }
     if(playerPlayed == 'playScissor'){
        realWeapon = 'scissor';
     }
     return realWeapon;
};

//create a function that will return the computer's real weapon name
const getComputerRealWeaponName = function (computerPlayed){
    let realCWeapon;
     if(computerPlayed == 'cPlayRock'){
        realCWeapon = 'rock';
     }
     if(computerPlayed == 'cPlayPaper'){
        realCWeapon = 'paper';
     }
     if(computerPlayed == 'cPlayScissor'){
        realCWeapon = 'scissor';
     }
     return realCWeapon;
};

//create a function that will return the name of the winner
const getRoundNameWinner = function(roundResult){
    let name;
    if(roundResult == 'You win this round!'){
        name = 'player';
    }
    if(roundResult == 'You lose this round.'){
        name = 'computer'
    }
    if(roundResult == "It's a tie!"){
        name = 'tie';
    }
    return name;
};

const table = document.querySelector("#historyTable");
const addToHistory = function(roundNumber, playerPlayed, computerPlayed, result){
    const row = table.insertRow(-1);
    const roundCell = row.insertCell(0);
    const playerCell = row.insertCell(1);
    const computerCell = row.insertCell(2);
    const winnerCell = row.insertCell(3);

    roundCell.innerHTML = roundNumber;
    playerCell.innerHTML = playerPlayed;
    computerCell.innerHTML = computerPlayed;
    winnerCell.innerHTML = result;
};

////create a function that will enable back all player inputs
const fixWeapons = function(){
    weapons.forEach(function(weapon){
        weapon.style.pointerEvents = 'initial';
        weapon.style.color = 'var(--blue)';
    });
};

//create a function that will run once the player selected a weapon
const playRound = function(){
    const playerSelected = this.id;

    //disable all clickables
    disableWeapons();

    showPlayerSelectedWeapon(playerSelected); 
    const computerSelected = computerPlay();
    showComputerSeletedWeapon(computerSelected);
    setTimeout(showVersus, 300);
    roundResult = getRoundResult(playerSelected, computerSelected);
    //I just learn something, setTimeout(function, 1000); will run okay, but if the function have an argument,
    //that function needs to be inside a function like this one below. I use arrow function for 1 liner
    setTimeout(() => { hideWeaponAndVs(computerSelected, playerSelected); }, 2699);
    // console.log(roundResult);
    setTimeout(showRoundWinner, 2700);
    setTimeout(hideRoundWinner, 4200);
    setTimeout(() => { addScore(roundResult) }, 4700);

    //get the real weapon name instead of id name
    const playerPlayed = getPlayerRealWeaponName(playerSelected);
    const computerPlayed = getComputerRealWeaponName(computerSelected);
    //get the name of the winner
    const result = getRoundNameWinner(roundResult);
    //record it to the history
    setTimeout(() => { addToHistory(roundCounter, playerPlayed, computerPlayed, result); }, 5000);

    //check if the game should still continue, if true run addRound()
    setTimeout(checkScore, 5050);
    
    setTimeout(showRoundCounter, 5100);
    //enable the inputs
    setTimeout(fixWeapons, 5200);
};

const toggleHowToPlay = function(){
    const htpInfoElement = document.querySelector('#htpInfo');
    if(htpInfoElement.style.display === 'none'){
        htpInfoElement.style.display = 'block';
    } else {
        htpInfoElement.style.display = 'none';
    }
};

const toggleHowToWin = function(){
    const htwInfoElement = document.querySelector('#htwInfo');
    if(htwInfoElement.style.display === 'none'){
        htwInfoElement.style.display = 'block';
    } else {
        htwInfoElement.style.display = 'none';
    }
}

const titleElement = document.querySelector('#title');
const hideTitle = function(){
    titleElement.style.display = 'none';
};

const hidePlayDiv = function(){
    playDiv.style.display = 'none';
};

const howToElement = document.querySelectorAll('.howTo');
const hideHowToElements = function(){
    howToElement.forEach(function(e){
        e.style.display = 'none';
    });
};

const roundContainerElement = document.querySelector('#round_container');
const showRoundContainerElement = function(){
    roundContainerElement.style.display = 'block';
};
const hideRoundContainerElement = function(){
    roundContainerElement.style.display = 'none';
};

const roundNumberElement = document.querySelector('#roundNumber');
const showRoundCounter = function(){
    roundNumberElement.innerHTML = roundCounter;
};

const gameContainerElement = document.querySelector('#gameContainer');
const showGameContainer = function(){
    gameContainerElement.style.display = 'flex';
};
const hideGameContainer = function(){
    gameContainerElement.style.display = 'none';
};

const winnerDivElement = document.querySelector('#winnerDiv');
const showWinnerDivElement = function(){
    winnerDivElement.style.display = 'flex';
};
const hideWinnerDivElement = function(){
    winnerDivElement.style.display = 'none';
};

const historyContainerElement = document.querySelector('#history');
const showHistory = function (){
    historyContainerElement.style.display = 'flex';
};
const hideHistory = function (){
    historyContainerElement.style.display = 'none';
};

let winner = null;
const fetchWinner = function(){
    if(playerScoreCounter > computerScoreCounter){
        winner = 'Player';
    }
    if(computerScoreCounter > playerScoreCounter){
        winner = 'Computer';
    }
    return winner;
};

const winnerNameElement = document.querySelector('#winnerName');
const displayWinner = function(winner){
    winnerNameElement.innerHTML = winner;
};

const deleteHistory = function(){
    let rowCount = table.rows.length;
    for(let i = rowCount - 1; i > 0; i--){
        table.deleteRow(i);
    }
};

const resetScoreCounter = function(){
    playerScoreElement.innerHTML = playerScoreCounter; 
    computerScoreElement.innerHTML = computerScoreCounter;
};

const returnHome = function(){
    location.reload();
    return false;
};

//start the game
const playGame = function() {
    hideTitle();
    hidePlayDiv();
    hideHowToElements();
    showRoundContainerElement();
    showRoundCounter();
    showGameContainer();
};

//end the game
const endGame = function(){
    winner = fetchWinner();

    hideRoundContainerElement();
    hideGameContainer();
    showWinnerDivElement();
    displayWinner(winner);
    showHistory();
};

//play again
const playAgain = function(){
    roundCounter = 1;
    playerScoreCounter = 0;
    computerScoreCounter = 0;

    hideWinnerDivElement();
    hideHistory();
    deleteHistory();

    showRoundContainerElement();
    showRoundCounter();
    showGameContainer();
    resetScoreCounter();
};

const playDiv = document.querySelector('#playDiv');
playDiv.addEventListener('click', playGame);

//create a variable containing an array list of objects with a class name of playerWeapons
const weaponsOfPlayer = document.querySelectorAll('.playerWeapons');
//adding an event listener for each element inside weaponsOfPlayer
weaponsOfPlayer.forEach(function(weapon){
    weapon.addEventListener('click', playRound);
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', returnHome);

const playAgainButton = document.querySelector('#playAgain');
playAgainButton.addEventListener('click', playAgain);

const howToPlayElement = document.querySelector('#htpArrow');
howToPlayElement.addEventListener('click', toggleHowToPlay);

const howToWinElement = document.querySelector('#htwArrow');
howToWinElement.addEventListener('click', toggleHowToWin);
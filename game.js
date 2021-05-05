let roundCounter = 1;
const addRound = () => { roundCounter++; };

const addToHistory = function(roundNumber, playerPlayed, computerPlayed, result){
    const table = document.querySelector("#historyTable");
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

    const playerScoreElement = document.querySelector('#playerScore');
    playerScoreElement.innerHTML = playerScoreCounter;
    const computerScoreElement = document.querySelector('#computerScore');
    computerScoreElement.innerHTML = computerScoreCounter;
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

    //enable the inputs
    setTimeout(fixWeapons, 5199);
    //add +1 to the roundCounter
    // setTimeout(addRound, 5200); deciding if I need to remove this in this function
};

//create a variable containing an array list of objects with a class name of playerWeapons
const weaponsOfPlayer = document.querySelectorAll('.playerWeapons');

//adding an event listener for each element inside weaponsOfPlayer
weaponsOfPlayer.forEach(function(weapon){
    weapon.addEventListener('click', playRound);
});

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

const howToPlayElement = document.querySelector('#htpArrow');
howToPlayElement.addEventListener('click', toggleHowToPlay);

const howToWinElement = document.querySelector('#htwArrow');
howToWinElement.addEventListener('click', toggleHowToWin);
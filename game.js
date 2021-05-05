//create a variable with an array of weapons for computers choices
const weaponChoices = ['cPlayRock', 'cPlayPaper', 'cPlayScissor'];
//create a function that will return a random weapon from the array
const computerPlay = () => weaponChoices[Math.floor(Math.random() * 3)];

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

//show the round winner in the html
const showRoundWinner = function(){
    roundWinnerElement = document.querySelector('#round-winner');
    roundWinnerElement.classList.remove('hidden');
    roundWinnerElement.innerHTML = roundResult;
};

//create a function that will run one the player selected a weapon
const weapons = document.querySelectorAll('.playerWeapons');
const playRound = function(){
    const playerSelected = this.id;
    // console.log('player selects: ',playerSelected);
    playerWeaponElement = document.querySelector(`#${playerSelected}`);
    playerWeaponElement.classList.add('selected');
    playerWeaponArenaElement = document.querySelector(`#${playerSelected}2`);
    playerWeaponArenaElement.classList.remove('hidden');

    const computerSelected = computerPlay();
    // console.log('computer selects: ', computerSelected);
    computerWeaponElement = document.querySelector(`#${computerSelected}`);
    computerWeaponElement.classList.add('selected');
    computerWeaponArenaElement = document.querySelector(`#${computerSelected}2`);
    computerWeaponArenaElement.classList.remove('hidden');

    //show the word with delay: VS. 
    const showVersus = function(){ 
        document.querySelector('#versus').classList.remove('hidden');
    };
    setTimeout(showVersus, 400);

    roundResult = getRoundResult(playerSelected, computerSelected);
    // console.log(roundResult);
    setTimeout(showRoundWinner, 2000);

};

weapons.forEach(function(weapon){
    weapon.addEventListener("click", playRound);
});
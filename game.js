//create a variable with an array of weapons for computers choices
const weaponChoices = ['cPlayRock', 'cPlayPaper', 'cPlayScissor'];
//create a function that will return a random weapon from the array
const computerPlay = () => weaponChoices[Math.floor(Math.random() * 3)];

//create a function that will run one the player selected a weapon
const weapons = document.querySelectorAll('.playerWeapons');
const playRound = function(){
    const playerSelected = this.id;
    // console.log('player selects: ',playerSelected);
    playerWeapon = document.querySelector(`#${playerSelected}`);
    playerWeapon.classList.add('selected');
    playerWeaponArena = document.querySelector(`#${playerSelected}2`);
    playerWeaponArena.classList.remove('hidden');

    const computerSelected = computerPlay();
    // console.log('computer selects: ', computerSelected);
    computerWeapon = document.querySelector(`#${computerSelected}`);
    computerWeapon.classList.add('selected');
    computerWeaponArena = document.querySelector(`#${computerSelected}2`);
    computerWeaponArena.classList.remove('hidden');

    //show the word with delay: VS. 
    const showVersus = function(){ 
        document.querySelector('#versus').classList.remove('hidden');
    };
    setTimeout(showVersus, 400);

};

weapons.forEach(function(weapon){
    weapon.addEventListener("click", playRound);
});

//create a function called getRoundResult and then add a timeout inside playRound
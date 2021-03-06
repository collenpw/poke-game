const myTeam = document.querySelector('.myTeam');
const gameDiv = document.querySelector('.game');
const pokeSelect = document.querySelectorAll('.pokeSelect')
const cynthiaTeam = document.querySelector('.cynthiaTeam');

class Pokemon {
    constructor(name, hp, moves) {
        this.name = name;
        this.hp = hp;
        this.moves = moves;
    }
    
    takeDamage(damage) {
        this.hp -= damage;
        this.updateStats();
    }
    
    dealDamage(target, damage) {
        target.hp -= damage;
        this.updateStats(target);       
    }
    
}

class MyPokemon extends Pokemon {
    
    createPoke(damage) {
        const pokeDiv = document.createElement('div');
        pokeDiv.classList.add(this.name, 'hidden');
        myTeam.appendChild(pokeDiv);
        const pokeImg = document.createElement('div');
        pokeImg.innerHTML = `<img class='sprite' src="sprites/${this.name}.png" alt="${this.name}">`
        pokeDiv.appendChild(pokeImg);
        const pokeName = document.createElement('h2');
        pokeName.classList.add (`${this.name}-name`);
        pokeName.innerHTML = `${this.name} HP: ${this.hp}`;
        pokeDiv.appendChild(pokeName);
        const moveList = document.createElement('ul');
        pokeDiv.appendChild(moveList);
        
        for(let i = 0; i < this.moves.length; i++) {
            const move = document.createElement('li');
            move.innerHTML = (`<button class='move' data-damage=${damage[i]}>${this.moves[i]}</button>`);
            moveList.appendChild(move);
        }
    }
    
    updateStats() {
        let stat = document.querySelector(`.${myCurrentPoke.name}-name`);
        stat.innerText = `${myCurrentPoke.name} HP: ${myCurrentPoke.hp}`
    }
    
}

class CynthiaPokemon extends Pokemon {
    
    createPoke(damage) {
        
        const pokeDiv = document.createElement('div');
        pokeDiv.classList.add(this.name, 'hidden');
        cynthiaTeam.appendChild(pokeDiv);
        const pokeImg = document.createElement('div');
        pokeImg.innerHTML = `<img src="sprites/${this.name}.png" alt="${this.name}">`
        pokeDiv.appendChild(pokeImg);
        const pokeName = document.createElement('h2');
        pokeName.classList.add (`${this.name}-name`);
        pokeName.innerHTML = `${this.name} HP: ${this.hp}`;
        pokeDiv.appendChild(pokeName);
        const moveList = document.createElement('ul');
        pokeDiv.appendChild(moveList);
        
        for(let i = 0; i < this.moves.length; i++) {
            const move = document.createElement('li');
            move.innerHTML = (`<button class='cynthia-move' data-damage=${damage[i]}>${this.moves[i]}</button>`);
            moveList.appendChild(move);
        }
        
    }
    
    updateStats() {
        let stat = document.querySelector(`.${cynthiaCurrentPoke.name}-name`);
        stat.innerText = `${cynthiaCurrentPoke.name} HP: ${cynthiaCurrentPoke.hp}`
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// MY TEAM ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const myTeamArr = [];

const infernape = new MyPokemon ('Infernape', 230, ['flamethrower', 'earthquake', 'close combat', 'heat wave']);
const infernapeDamage = [90, 100, 120, 110];
infernape.createPoke(infernapeDamage);
myTeamArr.push(infernape);

const pikachu = new MyPokemon ('Pikachu', 250, ['thunderbolt', 'volt tackle', 'iron tail', 'quick attack']);
const pikachuDamage = [90, 120, 100, 40];
pikachu.createPoke(pikachuDamage);
myTeamArr.push(pikachu);

const gliscor = new MyPokemon ('Gliscor', 190, ['earthquake', 'crunch', 'acrobatics', 'sky uppercut'])
const gliscorDamage = [100, 80, 120, 85];
gliscor.createPoke(gliscorDamage);
myTeamArr.push(gliscor);

const staraptor = new MyPokemon ('Staraptor', 210, ['fly', 'sky attack', 'close combat', 'aerial ace'])
const staraptorDamage = [90, 100, 120, 85];
staraptor.createPoke(staraptorDamage);
myTeamArr.push(staraptor);

const bidoof = new MyPokemon ('Bidoof', 220, ['hyper beam', 'close combat', 'double kick', 'iron tail'])
const bidoofDamage = [150, 120, 80, 100];
bidoof.createPoke(bidoofDamage);
myTeamArr.push(bidoof);

const alakazam = new MyPokemon ('Alakazam', 225, ['psychic', 'grass ball', 'shadow ball', 'thunder punch'])
const alakazamDamage = [90, 80, 80, 75];
alakazam.createPoke(alakazamDamage);
myTeamArr.push(alakazam);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////// CYNTHIAS TEAM ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cynthiaPokeTeam = []

const togekiss = new CynthiaPokemon ('Togekiss', 200, ['fly', 'grass ball', 'shadow ball', 'thunder punch'])
const togekissDamage = [90, 80, 90, 75];
togekiss.createPoke(togekissDamage);
cynthiaPokeTeam.push(togekiss);

const spiritomb = new CynthiaPokemon ('Spiritomb', 210, ['dream eater', 'shadow ball', 'dark pulse', 'uproar'])
const spiritombDamage = [100, 80, 80, 75];
spiritomb.createPoke(spiritombDamage);
cynthiaPokeTeam.push(spiritomb);

const garchomp = new CynthiaPokemon ('Garchomp', 250, ['earthquake', 'dragon pulse', 'dragon claw', 'outrage']);
const garchompDamage = [100, 90, 80, 70];
garchomp.createPoke(garchompDamage);
cynthiaPokeTeam.push(garchomp);

const roserade = new CynthiaPokemon ('Roserade', 180, ['leaf storm', 'hidden power-fire', 'sludge bomb', 'shadow ball'])
const roseradeDamage = [110, 80, 70, 80];
roserade.createPoke(roseradeDamage);
cynthiaPokeTeam.push(roserade);

const lucario = new CynthiaPokemon ('Lucario', 220, ['aura sphere', 'close combat', 'double kick', 'iron tail'])
const lucarioDamage = [90, 120, 80, 100];
lucario.createPoke(lucarioDamage);
cynthiaPokeTeam.push(lucario);

const milotic = new CynthiaPokemon ('Milotic', 230, ['blizzard', 'surf', 'dragon pulse', 'hyper beam'])
const miloticDamage = [110, 90, 85, 150];
milotic.createPoke(miloticDamage);
cynthiaPokeTeam.push(milotic);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myMoves = document.querySelectorAll('.move');
const cynthiaMoves = document.querySelectorAll('.cynthia-move');

console.log(myMoves);
console.log(cynthiaMoves)

const youWin = () => {
    gameDiv.style.fontSize = '200px'
    gameDiv.innerHTML = `<p class='message'>YOU WIN!</p><button class='reset'>RESET</button>`;
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function (){
        location.reload()})
        
    }
    
    const youLose = () => {
        gameDiv.style.fontSize = '200px'
        gameDiv.innerHTML = `<p class='message'>YOU LOSE!</p><button class='reset'>RESET</button>`;
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function (){
    location.reload()})

}

const handlePokemonAttack = (e) => {
    e.preventDefault();

   if (myTeamArr.length > 0 && cynthiaPokeTeam.length > 0) {
    if (e.target.classList.contains('move')) {

        for (let i = 0; i < cynthiaMoves.length; i++) {
            cynthiaMoves[i].disabled = false;
        }

        myCurrentPoke.dealDamage(cynthiaCurrentPoke, e.target.dataset.damage);
        cynthiaCurrentPoke.updateStats();

        for (let i = 0; i < myMoves.length; i++) {
            myMoves[i].disabled = true;
        }

    } else if (e.target.classList.contains('cynthia-move')) {

        for (let i = 0; i < myMoves.length; i++) {
            myMoves[i].disabled = false;
        }

        cynthiaCurrentPoke.dealDamage(myCurrentPoke, e.target.dataset.damage);
        myCurrentPoke.updateStats();

        for (let i = 0; i < cynthiaMoves.length; i++) {
            cynthiaMoves[i].disabled = true;
        }

    }
    if (myCurrentPoke.hp <= 0) {
        let idx = myTeamArr.indexOf(myCurrentPoke);
        document.querySelector(`.${myCurrentPoke.name}`).remove();
        myTeamArr.splice(idx, 1)
        console.log(myTeamArr);
        if (myTeamArr.length === 0) {
            youLose()
            return;
        }
        chooseMyPokemon();
       }
    if (cynthiaCurrentPoke.hp <= 0) {
        let idx = cynthiaPokeTeam.indexOf(cynthiaCurrentPoke);
        document.querySelector(`.${cynthiaCurrentPoke.name}`).remove();
        cynthiaPokeTeam.splice(idx, 1)
        console.log(cynthiaPokeTeam);
        if (cynthiaPokeTeam.length === 0) {
            youWin();
            return;
        }
        chooseCynthiasPokemon();
       }
    if (myTeamArr.length === 0) {
        youlose();
    } else if (cynthiaPokeTeam.length === 0) {
        youWin();
        console.log('you win');
    }
}

else {
    console.log('ahah');
}
}
let myCurrentPoke;
let cynthiaCurrentPoke;

const chooseMyPokemon = () => {
    myCurrentPoke = myTeamArr[Math.floor(Math.random() * myTeamArr.length)];
    // console.log(myCurrentPoke);
    document.querySelector(`.${myCurrentPoke.name}`).setAttribute('id', 'currentPoke');
}

chooseMyPokemon();

const chooseCynthiasPokemon = () => {
    cynthiaCurrentPoke = cynthiaPokeTeam[Math.floor(Math.random() * cynthiaPokeTeam.length)];
    document.querySelector(`.${cynthiaCurrentPoke.name}`).setAttribute('id', 'currentPoke');
}
chooseCynthiasPokemon();

cynthiaTeam.addEventListener('click', handlePokemonAttack)
myTeam.addEventListener('click', handlePokemonAttack);
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
        pokeDiv.setAttribute('id', this.name);
        // pokeDiv.innerText = `${this.name} HP:${this.hp}`
        myTeam.appendChild(pokeDiv);
        const pokeName = document.createElement('h2');
        pokeName.classList.add (`${this.name}-name`);
        pokeName.innerHTML = `${this.name} HP:${this.hp}`;
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
        console.log(myCurrentPoke.name);
        let stat = document.querySelector(`.${myCurrentPoke.name}-name`);
        console.log(stat);
        stat.innerText = `${myCurrentPoke.name} HP: ${myCurrentPoke.hp}`
    }

}

class CynthiaPokemon extends Pokemon {

    createPoke(damage) {

        const pokeDiv = document.createElement('div');
        pokeDiv.classList.add(this.name, 'hidden');
        pokeDiv.setAttribute('id', this.name);
        cynthiaTeam.appendChild(pokeDiv);
        const pokeName = document.createElement('h2');
        pokeName.classList.add (`${this.name}-name`);
        pokeName.innerHTML = `${this.name} HP:${this.hp}`;
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
        console.log(cynthiaCurrentPoke.name);
        let stat = document.querySelector(`.${cynthiaCurrentPoke.name}-name`);
        console.log(stat);
        stat.innerText = `${cynthiaCurrentPoke.name} HP: ${cynthiaCurrentPoke.hp}`
    }
}

////////////////////////////////////////////////////////// MY TEAM ////////////////////////////////////////////////////////////////////////////
const myTeamArr = [];

const infernape = new MyPokemon ('Infernape', 230, ['flamethrower', 'earthquake', 'close combat', 'heat wave']);
const infernapeDamage = [90, 100, 120, 110];
infernape.createPoke(infernapeDamage);
myTeamArr.push(infernape);

const garchomp = new MyPokemon ('Garchomp', 250, ['earthquake', 'dragon pulse', 'dragon claw', 'outrage']);
const garchompDamage = [100, 90, 80, 70];
garchomp.createPoke(garchompDamage);
myTeamArr.push(garchomp);

const gliscor = new MyPokemon ('Gliscor', 190, ['earthquake', 'crunch', 'acrobatics', 'sky uppercut'])
const gliscorDamage = [100, 80, 120, 85];
gliscor.createPoke(gliscorDamage);
myTeamArr.push(gliscor);

const staraptor = new MyPokemon ('Staraptor', 210, ['fly', 'sky attack', 'close combat', 'aerial ace'])
const staraptorDamage = [90, 100, 120, 85];
staraptor.createPoke(staraptorDamage);
myTeamArr.push(staraptor);

const lucario = new MyPokemon ('Lucario', 220, ['aura sphere', 'close combat', 'double kick', 'iron tail'])
const lucarioDamage = [90, 120, 80, 70];
lucario.createPoke(lucarioDamage);
myTeamArr.push(lucario);

const alakazam = new MyPokemon ('Alakazam', 225, ['psychic', 'grass ball', 'shadow ball', 'thunder punch'])
const alakazamDamage = [90, 80, 80, 75];
alakazam.createPoke(alakazamDamage);
myTeamArr.push(alakazam);

console.log(myTeamArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////// CYNTHIAS TEAM ////////////////////////////////////////////////////////////////

const cynthiaPokeTeam = []

const togekiss = new CynthiaPokemon ('Togekiss', 200, ['fly', 'grass ball', 'shadow ball', 'thunder punch'])
const togekissDamage = [90, 80, 90, 75];
togekiss.createPoke(togekissDamage);
cynthiaPokeTeam.push(togekiss);

const spiritomb = new CynthiaPokemon ('Spiritomb', 210, ['dream eater', 'shadow ball', 'dark pulse', 'uproar'])
const spiritombDamage = [100, 80, 80, 75];
spiritomb.createPoke(spiritomb);
cynthiaPokeTeam.push(spiritomb);

const cynthiaGarchomp = new CynthiaPokemon ('Garchomp', 250, ['earthquake', 'dragon pulse', 'dragon claw', 'outrage']);
const cynthiaGarchompDamage = [100, 90, 80, 70];
cynthiaGarchomp.createPoke(cynthiaGarchompDamage);
cynthiaPokeTeam.push(cynthiaGarchomp);

const roserade = new CynthiaPokemon ('Roserade', 180, ['leaf storm', 'hidden power-fire', 'sludge bomb', 'shadow ball'])
const roseradeDamage = [110, 80, 70, 80];
roserade.createPoke(roseradeDamage);
cynthiaPokeTeam.push(roserade);

const cynthiaLucario = new CynthiaPokemon ('Lucario', 220, ['aura sphere', 'close combat', 'double kick', 'iron tail'])
const cynthiaLucarioDamage = [90, 120, 80, 70];
cynthiaLucario.createPoke(cynthiaLucarioDamage);
cynthiaPokeTeam.push(cynthiaLucario);

const milotic = new CynthiaPokemon ('Milotic', 230, ['blizzard', 'surf', 'dragon pulse', 'hyper beam'])
const miloticDamage = [110, 90, 85, 150];
milotic.createPoke(miloticDamage);
cynthiaPokeTeam.push(milotic);

// console.log(cynthiaPokeTeam);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleEvent = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('move')) {

        myCurrentPoke.dealDamage(cynthiaCurrentPoke, e.target.dataset.damage);
        console.log(cynthiaCurrentPoke.hp);
        // console.log(myCurrentPoke);


        console.log(e.target.dataset.damage);

        cynthiaCurrentPoke.updateStats();
    }
}

let myCurrentPoke;

// const handleEventSelect = (e) => {
//     e.preventDefault();
//     if (e.target.classList.contains('pokeSelect')) {

//         console.log(e.target);
//         // myCurrentPoke = document.querySelector(`#${e.target.innerText}`);
//         myCurrentPoke = MyPokemon.e.target.innerText;
//         document.querySelector(`#${e.target.innerText}`).setAttribute('id', 'currentPoke');
//         e.target.remove();
//         // console.log(pokeSelect);
//         console.log(myCurrentPoke);
//         for(let i =0; i < pokeSelect.length;i++) {
//             pokeSelect[i].classList.add('hidden')
//         }
//         doBattle();
//     }

// }

let cynthiaCurrentPoke;

const chooseMyPokemon = () => {
    myCurrentPoke = myTeamArr[Math.round(Math.random() * 5)];
    console.log(myCurrentPoke);
    document.querySelector(`#${myCurrentPoke.name}`).setAttribute('id', 'currentPoke');
}

chooseMyPokemon();

const chooseCynthiasPokemon = () => {
    cynthiaCurrentPoke = cynthiaPokeTeam[Math.round(Math.random() * 5)];
    console.log(cynthiaCurrentPoke);
    document.querySelector(`#${cynthiaCurrentPoke.name}`).setAttribute('id', 'currentPoke');
}
chooseCynthiasPokemon();


const doBattle = (myDamage) => {
    
    while (cynthiaCurrentPoke.hp > 0 && myCurrentPoke.hp > 0) {
        cynthiaCurrentPoke.takeDamage(myCurrentPoke.moves[Math.round(Math.random() * 4)].dataset.damage);
        myCurrentPoke.takeDamage(cynthiaCurrentPoke.moves[Math.round(Math.random() * 4)].dataset.damage);
        console.log(myCurrentPoke.hp);
        console.log(cynthiaCurrentPoke.hp);
    }
}

// window.addEventListener('load', chooseCynthiasPokemon);
cynthiaTeam.addEventListener('click', handleEvent)
myTeam.addEventListener('click', handleEvent);
// gameDiv.addEventListener('click', handleEventSelect);



























































// const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
// const API_MOVES = 'https://pokeapi.co/api/v2/move-category/0/';
// const myTeam = document.querySelector('.myTeam');

// class Pokemon {

//     constructor (name, hp) {

//         // this.hp = 0;
//         this.name = name;
//         this.hp = hp;
//     }
        
//         async getPokeData() {
//             const response = await fetch (`${POKEMON_API}${this.name}`)
//             const pokeData = await response.json();
//             console.log(pokeData);
//             console.log(pokeData.stats[0].base_stat);
//             this.hp = pokeData.stats[0].base_stat;

//         }

// }

// // let hp = 0;

// const getHP = async (name) => {

//     const results = await fetch (`${POKEMON_API}${name}`)
//     const data = await results.json();
//     console.log(data);
//     let hp = data.stats[0].base_stat;
//     return hp;

// }
// getHP('chimchar');

// const chimchar = new Pokemon('chimchar', getHP('chimchar'));

// console.log(chimchar);
































// const search = async (name) => {

//     const response = await fetch (`${POKEMON_API}${name}`);
//     // const movesResponse = await fetch (API_MOVES);

//     pokemon = await response.json();
    // moves = await movesResponse.json();

    // const moveList = moves.moves;
    // const pokeMoves = pokemon.moves;

    // const pokemoves2 = [];
    // const usableMoves = [];
    // const moveNames = [];

    // for (let i = 0;i < pokeMoves.length; i++) {
    //     pokemoves2.push(pokeMoves[i].move)
    // }
 

    // for(let i =0; i< moveList.length; i++) {
    //     moveNames.push(moveList[i].name)
    // }

 
    // for (i = 0; i < pokemoves2.length; i++) {
    //     if (moveNames.includes(pokemoves2[i].name)) {
    //         usableMoves.push(pokemoves2[i])
    //     }
        
    // }
    // console.log(usableMoves);
 
    // for(let i = 0; i < usableMoves.length; i++) {
    //     moveDiv = document.createElement('div');
    //     moveDiv.innerHTML = `<button>${usableMoves[i].name}</button>`
    //     myTeam.appendChild(moveDiv);
    // }
        
    

// }  

// search();


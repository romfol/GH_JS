function Tamagotchi(name, health, satiety, strength, happiness, time, energy) {
    this.name = name;
    this.health = health;
    this.satiety = satiety;
    this.strength = strength;
    this.happiness = happiness;
    this.time = time;
    this.energy = energy;
    this.feed = function() {
        this.satiety += 10;
        this.happiness += 5;
        this.strength += 5; 
        this.time -=1;
        this.energy += 15;
    };
    this.play = function() {
        this.happiness += 15;
        this.strength -= 10;
        this.satiety -= 5;
        this.time -=1;
        this.energy -= 15;
    };
    this.sleep = function() {
        this.health += 10;
        this.strength += 10;
        this.happiness += 5;
        this.satiety -= 15;
        this.time -=1;
        this.energy += 25;
    };
    this.treat = function() {
        this.health += 15;
        this.satiety -= 10;
        this.strength += 5;
        this.happiness -= 10;
        this.time -=1;
        this.energy += 10;
    };
    this.selfDev = function() {
        this.health += 20;
        this.happiness += 10;
        this.strength += 15;
        this.satiety -= 10;
        this.time -= 1;
        this.energy -= 10;
    };
}

let person = prompt('Введіть ім\'я персонажу', 'Вася');

//Largo construct
let newTama = new Tamagotchi(person, 100, 100, 100, 100, 100, 100, 100);

function outPut() {
    document.getElementById('name').innerHTML = newTama.name;
    document.getElementById('health').innerHTML = newTama.health;
    document.getElementById('satiety').innerHTML = newTama.satiety;
    document.getElementById('strength').innerHTML = newTama.strength;
    document.getElementById('happiness').innerHTML = newTama.happiness;
    document.getElementById('time').innerHTML = newTama.time;
    document.getElementById('energy').innerHTML = newTama.energy;
}
outPut();

//life elapse
let lifeElapse = setInterval(function() {
    newTama.health -= 5;
    newTama.satiety -= 5;
    newTama.strength -= 5;
    newTama.happiness -= 5;
    newTama.time -= 1;
    newTama.energy -= 5;

    outPut();

    if (newTama.health <= 0||newTama.satiety <=0 || newTama.time <= 0){
        clearInterval(lifeElapse);
        alert ('He wasted =(');
    }
}, 3000);





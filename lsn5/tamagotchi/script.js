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

//Largo construct
let largo = new Tamagotchi('Largo', 100, 100, 100, 100, 100, 100, 100);

//life elapse
var lifeElapse = setInterval(function() {
    largo.health -= 10;
    largo.satiety -= 10;
    largo.strength -= 10 ;
    largo.happiness -= 10;
    largo.time -= 1;
    largo.energy -= 10;
    if (largo.health <= 0||largo.satiety <=0 || largo.time <= 0){
        clearInterval(lifeElapse);
        alert ('he died =(');
    }
}, 3000)

//methods into Html
document.getElementById('health').innerHTML = largo.health;
document.getElementById('satiety').innerHTML = largo.satiety;
document.getElementById('strength').innerHTML = largo.strength;
document.getElementById('happiness').innerHTML = largo.happiness;
document.getElementById('time').innerHTML = largo.time;
document.getElementById('energy').innerHTML = largo.energy;



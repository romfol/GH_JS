setTimeout(function() { alert('Привет') }, 5000);

function Tamagotchi(name, health, satiety, strength, happiness) {
    this.name = name;
    this.health = health;
    this.satiety = satiety;
    this.strength = strength;
    this.happiness = happiness;
    this.feed = function() {
        this.satiety += 10;
        this.happiness += 5;
        this.strength += 5;        
    };
    this.play = function() {
        this.happiness += 5;
        this.strength -= 10;
        this.satiety -= 5;
    };
    this.sleep = function() {
        
    }
}

var item1 = new Tamagotchi('Largo', 90, 80, 95, 100);
item1.feed();
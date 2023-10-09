class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
    makeSound() {
        console.log(`${this.species} makes a sound: ${this.sound}`);
}
}

class Dog extends Animal {
    constructor(species, sound, color) { 
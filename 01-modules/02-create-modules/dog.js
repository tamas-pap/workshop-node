const Animal = require('./animal');

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.name = name;
    this.breed = breed;
  }
  
  bark() {
    console.log(`Bark Bark! My name is ${this.name}.`);
  }
}

module.exports = Dog;

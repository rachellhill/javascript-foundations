var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    this.statues.push(statue);
    if (this.statues.length > 3) {
      var person = new Person(this.statues[0].name);
      this.statues.shift();
      person.mood = "relieved";
      return person;
    }
  }
}


module.exports = Medusa;

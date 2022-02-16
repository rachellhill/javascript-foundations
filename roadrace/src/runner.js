class Runner {
  constructor(name, age) {
    this.name = name; // Mike
    this.age = age; // 36
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = []; //'Rock N Roll Half Marathon'
  }

  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += miles;
  }

  stretch() {
    this.fitness += .5;
  }

  runRace(race, distance) {
    this.completedRaces.unshift(race);
    this.runSomeMiles(distance);
  }
}

module.exports = Runner;

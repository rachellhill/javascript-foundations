class Roadrace {
  constructor(race) {
    this.name = race.title; // Rock N Roll Half Marathon'
    this.location = race.city; // "Las Vegas"
    this.distance = 0; // 13.1
    this.participants = []; // mike
  }

  setDistance(distance) {
    this.distance += distance; // 13.1
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(runner) { // mike
    this.participants.push(runner);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name);
      this.participants[i].runSomeMiles(this.distance);
    }
  }
}

module.exports = Roadrace;

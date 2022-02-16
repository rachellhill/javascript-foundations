var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up'
  }

  admitSkier(name, hasLiftTicket) {
    var skier = new Skier(name, hasLiftTicket);
    // check to see if skier hasLiftTicket
    // then check if I have open spots
    // if both are true, push to array
    if (hasLiftTicket) {
      if (this.skiers.length < this.limit) {
        this.skiers.push(skier);
      } return `Sorry, ${name}. Please wait for the next lift!`;
    } return `Sorry, ${name}. You need a lift ticket!`;
  }

  startLift() {
    var openSeat = this.limit - this.skiers.length;
    if (openSeat === 1) {
      this.safetyBar = 'up';
      return `We still need 1 more skier!`;
    } else if (openSeat) {
      return `We still need ${openSeat} more skiers!`;
    } else {
      this.safetyBar = 'down';
    }
  }
}

module.exports = Lift;

class Skier {
  constructor(name, hasLiftTicket) {
    this.name = name;
    this.hasLiftTicket = hasLiftTicket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }

  takeLesson() {
    this.skillLevel += 1;
  }

  pickSlope() {
    // under 3 its green circle, if it's 3 or 4 = blue square, anything greater is black diamond
    if (this.skillLevel < 3) {
      this.nextSlope = 'green circle';
    } else if (this.skillLevel < 5) {
      this.nextSlope = 'blue square';
    } else {
        this.nextSlope = 'black diamond';
      }
    }
}

module.exports = Skier;

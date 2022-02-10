class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
    }
    robShip() {
      this.booty += 100;
      if (this.booty >= 500) {
        this.booty = 500;
        this.cursed = true;
        return 'ARG! I\'ve been cursed!';
      } return 'YAARRR!';

    }
    liftCurse() {
      this.booty = this.booty - 300;
      this.cursed = false;
      return 'Your curse has been lifted!';
    }

}






module.exports = Pirate;

class Skater {
  constructor(skater) {
    this.name = skater.name;
    this.skill = skater.skill;
    this.tricks = skater.tricks;  //tricks is an object with properties
    this.money = skater.cash;
    this.frustration = 0;
  }

  practice(tricks) {
// should increase frust
// dot vs bracket notation - use dot notation when you know exactly what the key is
// bracket is when you don't know "this.tricks AT that trick"
    if (!this.tricks[tricks]) {
      this.frustration += 1;
      // this.tricks[tricks] = true;
      //
    } if (this.frustration >= 3) {
      this.tricks[tricks] = true;
      this.frustration = 0;
      return `I just learned to ${tricks}!!!`;
    }
  }
}


module.exports = Skater;

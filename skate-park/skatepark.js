class SkatePark {
  constructor(skatePark) {
    this.name = skatePark.name;
    this.yearFounded = skatePark.year;
    this.style = skatePark.type;
    this.features = skatePark.features;
    this.isPrivate = skatePark.isPrivate || false;
    this.cost = skatePark.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if (this.occupants > 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    } else if (this.isPrivate && skater.money >= this.cost) {
      this.occupants.push(skater);
      skater.money -= this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if (this.isPrivate && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`
    }
    else {
      return `Welcome to the free ${this.name} Skatepark!`
    }
  }
}

module.exports = SkatePark;

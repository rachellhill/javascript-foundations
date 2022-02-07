class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
    if (pet !== undefined) {
      this.pet = pet;
    }
  }
  drink() {
    this.thirsty = false;
    if (this.ouncesDrank === 50) {
      return 'I\'m too full to drink anymore!';
    } return this.ouncesDrank = this.ouncesDrank + 10;
  }
}

module.exports = Vampire;

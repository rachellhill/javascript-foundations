class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(amountUsed) {
    // think about when do I need to check - before or after
    // if we dont have enough material (this.amount is < amountUsed) then we want to return a
    // string saying NO
    if (this.amount < amountUsed) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
    this.amount -= amountUsed
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
  }

  calculateMaterialCost() {
    // return some number value
    return this.amount * this.price;  
  }

}

module.exports = Material;

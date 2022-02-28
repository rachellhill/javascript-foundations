class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (this.snacks[snack] !== snack) {
      this.snacks.push(snack);
    }
  }
}

module.exports = VendingMachine;

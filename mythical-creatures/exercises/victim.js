class Victim {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }

  die() {
    this.alive = false;
  }
}

module.exports = Victim;

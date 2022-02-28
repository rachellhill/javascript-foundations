class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
  }

  shootBow() {
    if (this.cranky === true) {
      return 'NO!';
    }
    return 'Twang!!!';
  }

  run() {
    if (this.cranky = true) {
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  }
}

module.exports = Centaur;

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    var noticed = human.noticesOgre();
    if (noticed) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
      this.swings++;
      if (this.swings === 2) {
        human.knockedOut = true;
      }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;

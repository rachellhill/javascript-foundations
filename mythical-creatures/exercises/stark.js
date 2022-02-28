var Direwolf = require('../exercises/direwolf');
class Stark {
  constructor(stark) {
    this.name = stark.name;
    this.location = stark.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(direwolf, home) {
    var direwolf1 = new Direwolf(direwolf, home);
    direwolf1.home = this.location;
    direwolf1.protect(this);
    return direwolf1;
  }
};

module.exports = Stark;

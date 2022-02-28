class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    // push candy object to candies array
    this.candies.push(candy);
    this.count = this.candies.length;
  }

  contains(candy) {
    // checking the candies array to see if the bag contains a specific type of candy
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candy) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = Bag;

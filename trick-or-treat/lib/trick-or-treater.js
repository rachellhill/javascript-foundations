class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.fill(candy);
    this.hasCandy = true;
    this.countCandies = this.bag.count;
  }

  eat() {
    // eating candy in putCandyInBag every time eat is called
    // subtracting countCandies
    this.countCandies --;
    this.bag.candies.pop();
  }
}

module.exports = TrickOrTreater;

// passing in object into the constructor bc of the key value pair
// how many arguments are inside of the parens? 1 - complicated arg - a single object
// created 1 parameter - a single concept

class Craft {
  constructor(craftObject) {
    this.name = craftObject.type;
    // not any different than above, grab type and materials and store those in properties
    this.materials = craftObject.materials;
  }
  calculateProjectTotal() {
    var totalCost = 0;
    // for each individual material, I want to add the cost to totalCost
    for (var i = 0; i < this.materials.length; i++) {
      console.log(this.materials[i]);
      // this.materials[i] is an instance of the material class
      // we have access to usematerial method and calculateMaterialCost method if we are using it on
      // an instance of that class
      totalCost += this.materials[i].calculateMaterialCost();
      // calculate material cost first time through as canvas and second is paint
    }
    return totalCost;
  }
}

// test is doing the work of making a new material and then another, passing those materials in
// for this object of class



module.exports = Craft;

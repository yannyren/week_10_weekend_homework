var Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonousStatus = false;
}

Food.prototype = {
  poisoned: function(){
    this.poisonousStatus = true
  }
}
module.exports = Food;
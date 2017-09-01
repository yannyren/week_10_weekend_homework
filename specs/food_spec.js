var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {

  var food1;
  
  beforeEach(function(){
    food1 = new Food ("curry", 10, false);
  }),

  it("has a name", function(){
    assert.strictEqual(food1.name, "curry");
  }),

  it("has a replenishment value", function(){
    assert.strictEqual(food1.replenishmentValue, 10);
  }),

  it("has a poisonous status", function(){
    assert.strictEqual(food1.poisonousStatus, false);
  }),

  it("food can be poisoned", function(){
    food1.poisoned();
    assert.strictEqual(food1.poisonousStatus, true)
  })



})
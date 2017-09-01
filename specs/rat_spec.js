var assert = require("assert");
var Rat = require("../rat.js");
var Food = require("../food.js")

describe("Rat", function() {

  var rat1;
  var food1;
  
  beforeEach(function(){
    rat1 = new Rat ();
    food1 = new Food ("curry", 10, false);
  }),

  it("could turn food into poisonous ", function(){
    rat1.touchFood(food1);
    assert.strictEqual(food1.poisonousStatus, true)
  })



})
var assert = require("assert");
var Task = require("../task.js");

describe("Task", function() {

  var task1;
  
  beforeEach(function(){
    task1 = new Task ("swim", 8, "low", 5, false);
  }),

  it("has a name", function() {
    assert.strictEqual(task1.name, "swim");
  }),

  it("has a difficulty level", function(){
    assert.strictEqual(task1.difficultyLevel, 8);
  }),

  it("has an urgency level", function(){
    assert.strictEqual(task1.urgencyLevel, "low");
  }),

  it("has a reward", function(){
    assert.strictEqual(task1.reward, 5)
  }),

  it("should be able to be marked as completed", function(){
    task1.completed();
    assert.strictEqual(task1.complete, true)
  })

})
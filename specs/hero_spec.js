var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");
var Task = require("../task.js");

describe("Hero", function() {

  var hero1;
  var food1;
  var food2;
  var food3;
  var task1;
  var task2;


  beforeEach(function(){
    food1 = new Food ("curry", 10);
    hero1 = new Hero ("Micky", 10, "curry");
    food2 = new Food ("veggie", 10);
    food3 = new Food ("veggie", 10);
    task1 = new Task ("swim", 8, "high", 5);
    task2 = new Task ("walk", 9, "low", 6);
  }),

  it("has a name", function(){
    assert.strictEqual(hero1.name, "Micky");
  }),

  it("has a health", function(){
    assert.strictEqual(hero1.health, 10);
  }),

  it("has a favourite food", function(){
    assert.strictEqual(hero1.favouriteFood, "curry");
  }),

  it("can talk saying their name", function(){
    assert.strictEqual(hero1.talk(), hero1.name);
  }),

  it("has a collection of tasks to complete", function(){
    assert.deepStrictEqual(hero1.tasks, []);
  }),

  it("can eat food and the health level goes up by the food's replenishmentValue_normal", function() {
    hero1.eatFood(food2);
    assert.strictEqual(hero1.health, 20)
  }),

  it("can eat food and the health level goes up by the food's replenishmentValue_fav", function() {
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 25)
  }),

  it("can eat poisoned food and the health level goes down by the food's replenishmentValue", function() {
    food3.poisoned()
    hero1.eatFood(food3);
    assert.strictEqual(hero1.health, 0);
  }),

  it("should be able to sort their tasks by difficulty", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.sortTaskByDifficulty();
    assert.deepStrictEqual(hero1.tasks[0], task1);
  }),

  it("should be able to sort their tasks by urgency", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.sortTaskByUrgency();
    assert.deepStrictEqual(hero1.tasks[0], task1);
  }),

  it("should be able to sort their tasks by reward", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.sortTaskByReward();
    assert.deepStrictEqual(hero1.tasks[0], task1)
  }),


  it("should be able to view tasks that are marked as completed or incomplete", function() {
    hero1.addTask(task1);
    assert.strictEqual(hero1.checkTaskCompletion(task1), false)
  })


})
var Hero = function(name, health, favouriteFood) {
 this.name = name; 
 this.health = health;
 this.favouriteFood = favouriteFood;
 this.tasks = [];
}


Hero.prototype = {

 talk: function() {
  return this.name;
 },

 sortTaskByDifficulty: function() {
  
 },

 sortTaskByUrgency: function() {

 },

 sortTaskByReward: function() {

 },

 

 eatFood: function(food) {
   if (food.poisonousStatus === false && food.name !== this.favouriteFood) {
     this.health += food.replenishmentValue;
   } else if (!food.poisonousStatus && food.name === this.favouriteFood){
     this.health += (food.replenishmentValue * 1.5);
   } else {
     this.health -= food.replenishmentValue;
   }
 },

 addTask: function(task) {
   this.tasks.push(task);
 }, 

 // checkTaskCompletion: function() {
 //   var result = this.tasks.forEach(function(task){
 //    return task.name + " " + task.complete;
 //  });
 //  return result;
 // }

 checkTaskCompletion: function(task) {
  return this.tasks.includes (task)? task.complete : "not my task"
 }

}

module.exports = Hero;
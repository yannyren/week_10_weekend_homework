var Task = function(name, difficultyLevel, urgencyLevel, reward) {
  this.name = name;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = false;
}

Task.prototype = { 
  completed: function(){
    this.complete = true;
  }

}


module.exports = Task;
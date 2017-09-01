var Rat = function () {

}

Rat.prototype = {
  touchFood: function(food){
    food.poisoned();
  }
}



module.exports = Rat;
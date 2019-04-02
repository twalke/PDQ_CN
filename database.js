const Thought = function(thought) {
  this.name = thought.name;
  this.currentBeer = thought.currentBeer;
  this.currentThought = thought.currentThought;
  this.daydream = thought.daydream;
}

const Database = function() {
  this.thoughts = [];
}

Database.prototype.find = function() {
  return this.thoughts;
}

Database.prototype.save = function(thought) {
  const newThought = new Thought(thought);
  this.thoughts.push(newThought);
  return newThought;
}

module.exports = new Database();

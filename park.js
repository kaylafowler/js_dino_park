const Park = function(){
  this.dinos = [];
};

Park.prototype.numOfDinos = function(){
  return this.dinos.length;
};

Park.prototype.addDino = function(dino){
  this.dinos.push(dino);
};

Park.prototype.removeDino = function(dino){
  const indexOfDinoToRemove = this.dinos.indexOf(dino);
  this.dinos.splice(indexOfDinoToRemove, 1);
};

Park.prototype.removeDinoByType = function(dinoType){
  const copyOfDinosArray = this.dinos.slice();
  for(dino of copyOfDinosArray){
    if(dino.type == dinoType){
      this.removeDino(dino);
    };
  };
};


Park.prototype.offSpringOver = function(num){
  let offspringCountOverNum = [];
  for(dino of this.dinos){
    if(dino.numOfOffspring > num){
      offspringCountOverNum.push(dino);
    };
  };
  return offspringCountOverNum.length;
};

module.exports = Park;

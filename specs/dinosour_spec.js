const Dinosaur = require("../dinosaur.js")
const assert = require("assert");


describe("Dinosaur", function(){

  let cera;
  let petri;
  let littleFoot;


  beforeEach(function(){
    cera = new Dinosaur("triceratops", 2);
    petri = new Dinosaur("pteranodon", 4);
    littleFoot = new Dinosaur("brontosaurus", 1);
  });

  it("should have a type", function(){
    assert.strictEqual(cera.type, "triceratops");
  });

  it("should have a number of offspring", function(){
    assert.strictEqual(petri.numOfOffspring, 4);
  });

});

const Park = require("../park.js")
const assert = require("assert");
const Dinosaur = require("../dinosaur.js")


describe("Park", function(){

  let park;
  let cera;
  let petri;
  let littleFoot;
  let sara;


  beforeEach(function(){
    park = new Park();
    cera = new Dinosaur("triceratops", 2);
    petri = new Dinosaur("pteranodon", 4);
    littleFoot = new Dinosaur("brontosaurus", 1);
    sara = new Dinosaur("triceratops", 1);
  });

  it("should start empty", function(){
    assert.strictEqual(park.numOfDinos(), 0);
  });

  it("should be able to add a dinosaur", function(){
    park.addDino(littleFoot);
    assert.strictEqual(park.numOfDinos(), 1);
  })

  it("should be able to remove all dinos of a particular type", function(){
    park.addDino(sara);
    park.addDino(cera);
    park.addDino(petri);
    assert.strictEqual(park.numOfDinos(), 3);
    park.removeDinoByType("triceratops");
    assert.strictEqual(park.numOfDinos(), 1);
  })

  it("should be able to return all dinos with offspring count > 2", function(){
    park.addDino(sara);
    park.addDino(littleFoot);
    park.addDino(petri);
    assert.strictEqual(park.offSpringOver(2), 1);
  })

});

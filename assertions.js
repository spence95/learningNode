var assert = require("assert");
assert.throws(
  function(){
    throw new Error("Wrong value");
  }
);

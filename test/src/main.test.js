"user strict";

require("should");
const assert = require("assert");

describe( "Main", function(){
  it("should exist", function(){
    const main = require("../../src/main");
    assert(main !== undefined );
  });
});
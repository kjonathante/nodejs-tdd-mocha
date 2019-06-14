"user strict";

require("should");
const assert = require("assert");
const config = require("../../config");

describe("config module", function() {
  describe("check for keys", function() {
    let key = "googleId";
    it(`should have the key ${key}`, function() {
      assert( config.hasOwnProperty(key) );
    });
    key = "log";
    it(`should have the key ${key}`, function() {
      assert(config.hasOwnProperty(key) );
    });
  });

  describe("config.log()", function(){
    it("config.log() should return an object", function(){
      const log = config.log();
      assert(typeof log === "object");
    });
    it("config.log('development') should return an object", function(){
      const log = config.log("development");
      assert(typeof log === "object");
    });
    it("config.log('production') should return an object", function(){
      const log = config.log("production");
      assert(typeof log === "object");
    });
    it("config.log('test') should return an object", function(){
      const log = config.log("test");
      assert(typeof log === "object");
    });
  });
});

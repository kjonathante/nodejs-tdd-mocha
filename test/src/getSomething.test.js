"user strict";

const assert = require("assert");

const getSomething = require("../../src/getSomething");

describe("getSomething", function() {
  it("should exist", function() {
    assert(getSomething !== undefined);
  });

  describe(".getSomethingAsync(name, cb)", function() {
    it("should pass value to the callback function", function() {
      getSomething.getSomethingAsync("name", function(error, value) {
        assert(error === null);
        assert(value === "name");
      });
    });
  });

  describe(".getSomethingAsync(name, cb)", function() {
    it("should pass 'error' to the callback function", function() {
      getSomething.getSomethingAsync(null, function(error, value) {
        assert(error === "error");
        assert(value === undefined);
      });
    });
  });

  describe(".getSomethingPromise(name)", function() {
    it("should pass value to the onFulfilled function", function(done) {
      getSomething.getSomethingPromise("name").then(function(value) {
        assert(value === "name");
        done();
      });
    });
  });

  describe(".getSomethingPromise(name)", function() {
    it("should pass error to the onRejected function", function(done) {
      getSomething.getSomethingPromise().then(
        function() {},
        function(error) {
          assert(error === "error");
          done();
        }
      );
    });
  });

  describe(".getSomethingPromise(name)", function() {
    it("should pass error to the catch onRejected function", function(done) {
      getSomething
        .getSomethingPromise()
        .then(function() {})
        .catch(function(error) {
          assert(error === "error");
          done();
        });
    });
  });
});

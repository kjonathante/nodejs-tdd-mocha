"user strict";

require("should");
const assert = require("assert");

describe("Main", function() {
  it("should exist", function() {
    const main = require("../../src/main");
    assert(main !== undefined);
  });
});

describe("#photoObjToURL()", function() {
  it("should take a photo object from Flickr and return a string", function() {
    const main = require("../../src/main");

    let input = {
      id: "24770505034",
      owner: "97248275@N03",
      secret: "31a9986429",
      server: "1577",
      farm: 2,
      title: "20160229090898",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };
    let expected =
      "https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg";
    let actual = main.photoObjToURL(input);
    assert(expected === actual);

    input = {
      id: "24770504484",
      owner: "97248275@N03",
      secret: "69dd90d5dd",
      server: "1451",
      farm: 2,
      title: "20160229090903",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };
    expected =
      "https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg";
    actual = main.photoObjToURL(input);
    assert(expected === actual);
  });
});

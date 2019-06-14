# TDD Steps:
1. Red: Write a test and make sure it fails.
2. Green: Write the simplest, easiest possible code to make the test pass.
3. Refactor: Optimise and/or simplify the application code, making sure that all the tests still pass.

Result: 
Write tests; and
Write smaller, easier-to-understand units of code.

# test that I can load the module
```js

// flickr-fetcher-spec.js
'use strict';
var expect = require('chai').expect;

describe('FlickrFetcher', function() {
    it('should exist', function() {
        var FlickrFetcher = require('./flickr-fetcher.js');
        expect(FlickrFetcher).to.not.be.undefined;
    });
});
```

BDD
Written in the form: Describe "thing". It should "do something".
"thing" can be a module, or a class, or a method, or a function.

Ways to export your function
```js
module.exports = {
  photoObjToURL(input) {
    console.log(input);
  },
  photoObjToURL2: function (input) {
    console.log(input);
  },
  photoObjToURL3: (input) => {
    console.log(input);
  }
};
```


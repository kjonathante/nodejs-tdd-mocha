module.exports = {
  getSomethingAsync(name, cb) {
    if (!name) return cb("error");

    return cb(null, name);
  },
  getSomethingPromise(name) {
    return new Promise((resolve, reject) => {
      this.getSomethingAsync(name, function(error, name) {
        if (error) return reject("error");
        resolve(name);
      });
    });
  }
};

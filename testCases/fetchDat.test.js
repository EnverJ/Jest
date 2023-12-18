const fetchData = require("./fetchData");

test("testing callBack function", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("hello");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

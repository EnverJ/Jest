const sum = require("./sum");

test("test case", () => {
  expect(sum(2, 3)).not.toBe(50);
});

test("test second case", () => {
  expect(sum(20, 30)).toBe(50);
});

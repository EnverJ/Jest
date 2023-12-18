const sum = require("./StringHello");

// test("string test case", () => {
//   expect(sum("HELLO")).toMatch("HELLO");
// });

test("validate partial match", () => {
  expect(sum("HELLO")).toMatch(/LL/);
});

test("validate SHOULD NOT match", () => {
  expect(sum("HELLO")).not.toMatch("HELjLO");
});

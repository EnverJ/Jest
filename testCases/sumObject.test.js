const sum = require("./sumObject");

test("object validation", () => {
  expect(sum()).toEqual({ name: "anwar" });
});

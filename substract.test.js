const sub = require("./substract");

test("properly adds two numbers", () => {
  expect(sub(4, 2)).toBe(2);
});

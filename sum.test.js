const sum = require("./sum");

// premier paramètre décrit
test("Additionner 2 nombres", () => {
  expect(sum(1, 2)).toBe(3);
});

const { capitalize, reverseString, calculator } = require("./assignment");

test("capitalize", () => {
  expect(capitalize("harneet")).toBe("Harneet");
  expect(capitalize("felisha")).toBe("Felisha");
  expect(capitalize("thor")).toBe("Thor");
});

test("reverse string", () => {
  expect(reverseString("harneet")).toBe("teenrah");
});

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

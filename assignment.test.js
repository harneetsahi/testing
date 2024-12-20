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

test("subtract", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("divide", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("multiply", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./assignment");

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

test("caesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

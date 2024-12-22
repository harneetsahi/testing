const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
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

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray", () => {
  expect(analyzeArray([10, 12, 5, 9, 2, 16])).toEqual({
    average: 9,
    min: 2,
    max: 16,
    length: 6,
  });
});

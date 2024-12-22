const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
  fetchData,
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

/////////////////// more testing with axios and mocking

///// axios
it("async: should return correct todo", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});

///// mock
// const fetchData = async (id) => {
//   const results = await axios.get(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );

//   return results.data;
// };

// it("mock axios", async () => {
//   // first param is obj, second param is the method you want to spy on
//   jest.spyOn(axios, "get").mockReturnValueOnce({
//     data: {
//       id: 1,
//       todo: "learn mock testing",
//     },
//   });
//   const results = await fetchData(1);

//   expect(results.todo).toBe("learn mock testing");
// });

//// mock: we want to mock the callback instead of actually calling a function
const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x); //// jest.fn() creates a mock function.

  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0); // only for testing. Calling multiple expects in the same test is not good.
  expect(mockCallback.mock.results[0].value).toBe(42); // 42 + 0 = 42
  expect(mockCallback.mock.results[1].value).toBe(43); // 42 + 1 = 43
});

/// the below function can mocka  return value of the mock function, which eliminates the need for x => 42 + x in the above function
it("mock return", () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(true).mockReturnValueOnce("Hello"); // first mockReturnsValue returns true, second call returns "Hello"

  const results = mock(); // first call
  const results2 = mock(); // second call

  expect(results).toBe(true);
  expect(results2).toBe("Hello");
});

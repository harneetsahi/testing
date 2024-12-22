const axios = require("axios");

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  divide: function (x, y) {
    return x / y;
  },

  multiply: function (x, y) {
    return x * y;
  },
};

function caesarCipher(str, shift) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.codePointAt(i);

    let capA = "A".codePointAt(0); // 65
    let capZ = "Z".codePointAt(0); // 90
    let smallA = "a".codePointAt(0); // 97
    let smallZ = "z".codePointAt(0); // 122

    if (charCode >= capA && charCode <= capZ) {
      charCode -= capA; // to bring the charCode in 0-25 range
      charCode = (charCode + (shift % 26) + 26) % 26; // modulo wraps it. +26 to turn any negatives into positives. Modulo again to wrap it within the alphabet range.
      charCode += capA; // bring it back to their original code numbers
    } else if (charCode >= smallA && charCode <= smallZ) {
      charCode -= smallA;
      charCode = (charCode + (shift % 26) + 26) % 26;
      charCode += smallA;
    }

    result += String.fromCodePoint(charCode);
  }

  return result;
}

function analyzeArray(arr) {
  let average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;

  return {
    average,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

///////// instead of axios like below, we use mocks (refer to the test file)

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return results.data;
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
  fetchData,
};

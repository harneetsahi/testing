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
};

module.exports = { capitalize, reverseString, calculator };

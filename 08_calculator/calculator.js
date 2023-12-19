const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};

const sum = function(arr) {
	return arr.reduce((last, item) => add(item, last), 0)
};

const multiply = function(arr) {
  return arr.reduce( (last, item) => last * item)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let result = 1;
  if (num === 0) {
    return result;
  } else { 
    for (let i = 1; i<= num; i++) {
      result*= i;
  };
  return result;
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

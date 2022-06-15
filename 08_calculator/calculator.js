const add = (a, b) => {
  return (a + b);
};

const subtract = (a, b) => {
	return (a - b);
};

const sum = (array) => {
  total = 0;
	if (array.length === 0) {
    return 0;
  } else {
    for (let num of array) {
      parseInt(num);
      total += num;
  } return total;
  }
};

const multiply = (array) => {
  total = 1;
  for (let num of array) {
    parseInt(num);
    total *= num;
  } return total;
};

const power = (a, b) => {
  let total = 1;
	for (let i = 0; i < b; i++) {
    total *= a;
  } return total;
};

const factorial = (num) => {
  total = 1;
	if ( num === 0) {
    return 1;
  }else {
    for (let i = num; i > 0; i --) {
       total *= i;
    }
  } return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
